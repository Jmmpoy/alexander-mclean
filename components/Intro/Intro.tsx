import React, { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";

interface IntroProps {
  setIntroIsfinished: (value: boolean) => void;
}

const Intro: React.FC<IntroProps> = ({ setIntroIsfinished }) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate("p", { opacity: 1 }, { duration: 1, ease: "easeInOut" })
      .then(() =>
        animate(
          "p",
          { y: 100 },
          { duration: 1, delay: 0.7, ease: [0.46, 0.03, 0.52, 0.96] }
        )
      )
      .then(() =>
        animate(
          scope.current,
          { scaleY: 0 },
          { duration: 1, ease: [0.46, 0.03, 0.52, 0.96] }
        )
      )
      .then(() => {
        setIntroIsfinished(true);
      });
  }, []);

  return (
    <motion.div
      ref={scope}
      className="bg-[#0e3d88] tracking-tighter absolute w-full h-full z-30 flex justify-center items-center text-white font-sohneKraftig text-5xl"
      style={{ transformOrigin: "top" }}
    >
      <div className="overflow-hidden">
        <motion.p className="flex" initial={{ opacity: 0 }}>
          A . C . M <span className="text-xl ml-1">©</span>
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Intro;
