import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Arrow from "./arrow";

// Add the smooth behavior to go to top
export const goToTop = () => {
  document.documentElement.style.scrollBehavior = "smooth";
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  // reset scroll behavior after scrolling
  setTimeout(() => {
    document.documentElement.style.scrollBehavior = "auto";
  }, 1000);
};

export default function ScrollToTop() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", updatePosition);

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return (
    <AnimatePresence>
      {scrollPosition > 100 && (
        <div className="absolute right-5 bottom-[20px] z-40 w-10 h-10 flex justify-center">
          {" "}
          <motion.button
            onClick={goToTop}
            className="scrollToTop-btn rounded-full bg-white w-full h-full p-2"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.6 } }}
            exit={{ y: 100, opacity: 0, transition: { duration: 0.6 } }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 1 }}
          >
            <Arrow
              size="w-12 w-12"
              style="rotate-[270deg] text-white h-full w-full flex justify-center text-blue"
            />
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  );
}
