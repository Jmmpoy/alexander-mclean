import { useScroll, useTransform, motion } from "framer-motion";
import React from "react";

const BackgroundVideo = () => {
  const videos = ["/videos/sailbot-2.mp4", "/videos/sailbot-1.mp4"];
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  return (
    <>
      <motion.div
        style={{ y }}
        className="absolute top-0 left-0 w-screen h-screen -z-10"
      >
        <video
          style={{
            width: "100vw",
            height: "100vh",
            zIndex: -1,
            objectFit: "cover",
          }}
          preload="none"
          autoPlay
          muted
          loop
        >
          <source src="/videos/sailbot-2.mp4" type="video/mp4" />
        </video>
      </motion.div>
      <motion.div
        style={{
          y,
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(33, 89, 167, 0.5)",
          zIndex: -1,
        }}
      />
    </>
  );
};

export default BackgroundVideo;
