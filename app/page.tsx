import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Ambiance } from "@/components/Ambiance";
import { WhyUs } from "@/components/WhyUs";
import { HowItWorks } from "@/components/HowItWorks";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <Ambiance />
        <WhyUs />
        <HowItWorks />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
