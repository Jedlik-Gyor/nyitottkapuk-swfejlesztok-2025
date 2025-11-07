import Competition from "@/components/Competition";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import KeyMetrics from "@/components/KeyMetrics";
import LogoAnimation from "@/components/LogoTicker";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import TextReveal from "@/components/TextReveal";

export default function Home() {
  return (
    <div className="bg-gray-100 transition-colors dark:bg-gray-900">
      <Navbar />
      <Hero />
      <TextReveal />
      <KeyMetrics />
      <LogoAnimation />
      <Services />
      <Portfolio />
      <Competition />
      <Contact />
      <Footer />
    </div>
  );
}
