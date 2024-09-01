import React, { useEffect } from "react";
import { stagger, useAnimate, motion } from "framer-motion";

interface HeroLinesProps {
  introIsFinished: boolean;
}

const HeroLines: React.FC<HeroLinesProps> = ({ introIsFinished }) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (introIsFinished) {
      animate(
        "li",
        { opacity: [0, 1], y: 0 },
        { duration: 0.5, delay: stagger(0.1, { ease: "easeInOut" }) }
      );
    }
  }, [animate, introIsFinished]);

  // const textLines = [
  //   "Plongez dans l'univers visuel d'Alexander.",
  //   "Chaque photo révèle une nouvelle perspective.",
  //   "Voyagez à travers l'objectif.",
  // ];

  const textLines = ["Alexander", "Champy McLean."];

  return (
    <div className=" hero-container w-12/12 relative">
      <ul ref={scope}>
        {textLines.map((line, i) => {
          return (
            <div className="overflow-hidden" key={i}>
              <motion.li
                initial={{ opacity: 0, y: 100 }}
                className={`font-sohneKraftig font-bold tracking-tight mx-auto text-opacity-100 text-white mb-0 uppercase w-12/12  text-4xl sm:text-5xl md:text-7xl lg:text-8xl`}
              >
                {line}
              </motion.li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default HeroLines;
