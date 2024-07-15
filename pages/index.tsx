import About from "@/components/About/about";
import Contact from "@/components/contact";
import Hero from "@/components/Hero/index";
import Intro from "@/components/Intro/Intro";
import Portfolio from "@/components/Portfolio/portfolio";
import Services from "@/components/Services/services";

export default function Home() {
  return (
    <div className="overflow-y-hiddenhidden">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
}
