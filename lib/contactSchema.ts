import { z } from "zod";

import { services } from "@/data/site";

/**
 * Shared contact-form schema — used by the client form (react-hook-form)
 * and re-validated on the server (/api/contact) so bad payloads never pass.
 */
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Please enter your name." })
    .max(80, { message: "That name is too long." }),
  phone: z
    .string()
    .trim()
    .min(7, { message: "Please enter a valid phone number." })
    .max(25, { message: "That phone number is too long." })
    .regex(/^[+\d][\d\s().-]{6,}$/, {
      message: "Please enter a valid phone number.",
    }),
  email: z
    .string()
    .trim()
    .min(1, { message: "Please enter your email." })
    .email({ message: "Please enter a valid email address." }),
  service: z
    .string()
    .trim()
    .min(1, { message: "Please choose a service." })
    // Accept any listed service plus a general enquiry option.
    .refine(
      (value) =>
        value === "General enquiry" ||
        services.some((s) => s.name === value),
      { message: "Please choose a service from the list." },
    ),
  message: z
    .string()
    .trim()
    .min(10, { message: "Please add a little more detail (10+ characters)." })
    .max(1000, { message: "Please keep your message under 1000 characters." }),
  // Honeypot: real users leave this empty; bots tend to fill it.
  company: z.string().max(0).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;
