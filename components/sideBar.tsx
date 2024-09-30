import { motion } from "framer-motion";
import React, { useState } from "react";

const SideBarMenu = ({ isSideMenuVisible }: any) => {
  const menu = {
    open: {
      width: "480px",
      height: "650px",
      top: "25px",
      right: "0px",
      transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
    },

    closed: {
      width: "0px",

      height: "0px",

      top: "0px",

      right: "0px",

      transition: {
        duration: 0.75,
        delay: 0.35,
        type: "tween",
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <motion.div
      className="w-[480px] h-[650px] bg-red-500 absolute"
      variants={menu}
      animate={isSideMenuVisible ? "open" : "closed"}
      initial="closed"
    ></motion.div>
  );
};

export default SideBarMenu;
