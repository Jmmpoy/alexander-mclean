import React, { useRef } from "react";
import heroImage from "../../public/images/hero-image.avif";
import landing from "../../public/images/LANDING.png";
import Title from "../Title";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import WavyIcon from "./wavyIcon";
import Container from "../container";
import { ParallaxScroll } from "./parallaxSroll";

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
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -10]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <Container>
      <Title title="PORTFOLIO" lineSize="120" />
      <ParallaxScroll images={images} className="mt-24" />
      {/* <div className="mt-44 grid grid-col-1 gap-20 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3">
        {images.map((image, index) => {
          // Ref to track if this particular image container is in view
          const ref = useRef(null);
          const isInView = useInView(ref, { once: true });

          return (
            <motion.div
              key={index}
              ref={ref}
              style={{ y: isInView ? ((index - 1) % 3 === 0 ? y : y2) : y }}
              className="overflow-hidden min-h-[300px]"
            >
              <img
                src={image}
                className="h-[120%] transition duration-700 ease-in-out hover:scale-125"
              />
            </motion.div>
          );
        })}
      </div> */}
      <div className="text-center  relative flex flex-col">
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
