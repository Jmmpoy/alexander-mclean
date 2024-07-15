import { motion } from "framer-motion";
import React from "react";
import heroImage from "../../public/images/hero-image.avif";
import Image from "next/image";

const BackgroundImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
      }}
    >
      <Image
        src={heroImage}
        alt="bg"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority={true}
      />

      {/* OVERLAY */}
      <div className="absolute top-0 w-screen h-screen bg-blue opacity-60" />
    </motion.div>
  );
};

export default BackgroundImage;
