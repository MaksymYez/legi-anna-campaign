import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BeforeAfter from "@/components/BeforeAfter";
import Pricing from "@/components/Pricing";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <BeforeAfter />
        <Pricing />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}
