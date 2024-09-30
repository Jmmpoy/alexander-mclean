import React, { useRef } from "react";
import heroImage from "../../public/images/hero-image.avif";
import landing from "../../public/images/LANDING.png";
import Title from "../Title";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import WavyIcon from "./wavyIcon";
import Container from "../container";
import { ParallaxScroll } from "./parallaxSroll";
import { useRouter } from "next/router";

const Portfolio = () => {
  const images = [
    heroImage.src,
    landing.src,
    heroImage.src,
    landing.src,
    heroImage.src,
    landing.src,
    heroImage.src,
    landing.src,
    heroImage.src,
  ];

  const gridRef = useRef<any>(null);
  const router = useRouter(); // Initialize router

  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -10]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // Handle image click and navigate to the project page
  const handleImageClick = (projectId: number) => {
    router.push(`/project/${projectId}`);
  };

  return (
    <Container id="Portfolio-Section">
      <Title title="PORTFOLIO" lineSize="120" />
      {/* <ParallaxScroll images={images} className="mt-24" /> */}
      <div
        className="my-20 grid grid-col-1 gap-20 sm:grid-cols-2 sm:gap-12 md:grid-cols-3 lg:grid-cols-4
      "
      >
        {images.map((image, index) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { once: true });

          return (
            <motion.div
              key={index}
              ref={ref}
              className="overflow-hidden min-h-[200px] cursor-pointer"
              onClick={() => handleImageClick(index)}
              // Motion props for opacity animation
              initial={{ opacity: 0 }} // Start with opacity 0
              animate={{ opacity: isInView ? 1 : 0 }} // Animate to opacity 1 when in view
              transition={{ duration: 0.8, ease: "easeInOut" }} // Animation settings
            >
              <img
                src={image}
                className="h-[120%] transition duration-700 ease-in-out hover:scale-125"
              />
            </motion.div>
          );
        })}
      </div>
      <div className="text-center  relative flex flex-col ">
        <button className="text-base font-sohneKraftig uppercase text-blue">
          Voir plus
        </button>
        <div className="w-20 mx-auto wavy-icon-container ">
          <WavyIcon color="#2159a7" />
        </div>
      </div>
    </Container>
  );
};

export default Portfolio;
