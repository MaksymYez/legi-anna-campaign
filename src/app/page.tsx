import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BeforeAfter from "@/components/BeforeAfter";
import Gallery from "@/components/Gallery";
import FirePit from "@/components/FirePit";
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
        <Gallery />
        <FirePit />
        <Pricing />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}
