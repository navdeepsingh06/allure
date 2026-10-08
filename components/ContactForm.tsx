"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

import { contactSchema, type ContactInput } from "@/lib/contactSchema";
import { services, business, contactFormEndpoint } from "@/data/site";

type Status = "idle" | "submitting" | "success" | "error";

/** Build a prefilled mailto: link from the form data (no-backend fallback). */
function buildMailto(data: ContactInput): string {
  const subject = `New enquiry: ${data.service}`;
  const body = [
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email}`,
    `Service: ${data.service}`,
    "",
    data.message,
  ].join("\n");
  return `mailto:${business.email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { service: "" },
  });

  const onSubmit = async (data: ContactInput) => {
    // Honeypot filled → silently "succeed" without doing anything (likely a bot).
    if (data.company) {
      setStatus("success");
      reset();
      return;
    }

    // No form service configured: fall back to the visitor's email app.
    if (!contactFormEndpoint) {
      window.location.href = buildMailto(data);
      setStatus("success");
      reset();
      return;
    }

    // Submit to the configured static form service (Formspree, Web3Forms, …).
    setStatus("submitting");
    try {
      const res = await fetch(contactFormEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  // Shared classes for inputs; red ring when the field has an error.
  const field = (hasError: boolean) =>
    `w-full rounded-xl border bg-canvas px-4 py-3 text-sm text-ink placeholder:text-muted/70 transition-colors focus:border-plum focus:outline-none focus:ring-2 focus:ring-plum/30 ${
      hasError ? "border-red-400" : "border-line"
    }`;

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-center rounded-2xl border border-line bg-canvas p-8 text-center shadow-soft"
      >
        <CheckCircle2 className="text-plum" size={40} aria-hidden="true" />
        <h3 className="mt-4 text-2xl">Thank you</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {contactFormEndpoint
            ? "Your message has been sent. We'll be in touch soon to arrange your consultation."
            : "Your email app should have opened with your message ready — just press send. Prefer to call? See the number on the left."}
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-full border border-plum/30 px-5 py-2.5 text-sm font-semibold text-plum transition-colors hover:bg-plum-soft"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-2xl border border-line bg-canvas p-6 shadow-soft sm:p-8"
    >
      {/* Honeypot: hidden from users, catches bots. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("company")}
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
            Name
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={field(!!errors.name)}
            {...register("name")}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-xs text-red-600">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={field(!!errors.phone)}
            {...register("phone")}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1.5 text-xs text-red-600">
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
            Email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={field(!!errors.email)}
            {...register("email")}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-red-600">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-ink">
            Service of interest
          </label>
          <select
            id="service"
            aria-invalid={!!errors.service}
            aria-describedby={errors.service ? "service-error" : undefined}
            className={field(!!errors.service)}
            defaultValue=""
            {...register("service")}
          >
            <option value="" disabled>
              Choose a service…
            </option>
            {services.map((s) => (
              <option key={s.name} value={s.name}>
                {s.name}
              </option>
            ))}
            <option value="General enquiry">General enquiry</option>
          </select>
          {errors.service && (
            <p id="service-error" className="mt-1.5 text-xs text-red-600">
              {errors.service.message}
            </p>
          )}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${field(!!errors.message)} resize-y`}
          placeholder="Tell us a little about what you're looking for."
          {...register("message")}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-red-600">
            {errors.message.message}
          </p>
        )}
      </div>

      {status === "error" && (
        <p
          role="alert"
          className="mt-5 flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          <AlertCircle size={18} aria-hidden="true" />
          Something went wrong sending your message. Please try again or call us.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-plum px-7 py-3.5 text-base font-semibold text-canvas shadow-soft transition-colors hover:bg-plum-hover disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={18} className="animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
