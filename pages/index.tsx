import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio/portfolio";
import ScrollToTop from "@/components/scrollToTop";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
}
