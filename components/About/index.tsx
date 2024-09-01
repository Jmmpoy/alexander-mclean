import React, { useEffect } from "react";
import Container from "../container";
import Title from "../Title";
import heroImage from "../../public/images/hero-image.avif";
import {
  inView,
  motion,
  useAnimate,
  useScroll,
  useTransform,
} from "framer-motion";
import Carousel from "./carousel";

export default function About() {
  const [scope, animate] = useAnimate();
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  useEffect(() => {
    inView(".about-slider", () => {
      animate(
        ".about-slider",
        { opacity: 1 },
        { duration: 1, ease: "easeInOut" }
      );
    });
    inView(".content", () => {
      animate(
        ".content",
        { opacity: [0, 1] },
        { duration: 0.7, ease: "easeInOut" }
      );
    });
  }, []);

  const text1 =
    "Exceptuer efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Punctual adipiscing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquid, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.";

  const text2 =
    "Exceptuer efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Punctual adipiscing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquid, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.";

  const images = [heroImage.src, heroImage.src, heroImage.src, heroImage.src];
  const Slider = ({ images }: any) => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        className="w-full flex-grow lg:col-span-5 about-slider mt-20 lg:mt-0"
      >
        <Carousel slides={images} autoSlide={false} />
      </motion.div>
    );
  };
  const Section = () => {
    return (
      <div className="Section lg:space-y-0 col-span-12 flex gap-x-20 flex-col lg:flex-row ">
        <div className=" w-full md:w-2/3 lg:w-1/3 flex flex-col  items-start font-sohneKraftig text-blue ">
          <Title title="À propos" lineSize="120" />
          <p className="text-base mt-16 w-full"> {text1}</p>
        </div>
        <Slider images={images} />
      </div>
    );
  };

  return (
    <Container extraClasses="lg:pt-[5rem] pb-[6rem] about-section">
      <div className="relative" ref={scope}>
        <section className=" mt-24 lg:grid lg:grid-cols-12 relative">
          <Section />
        </section>
      </div>
    </Container>
  );
}
