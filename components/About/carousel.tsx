import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "react-feather";

export default function Carousel({
  autoSlide = false,
  autoSlideInterval = 3000,
  slides,
}: {
  autoSlide?: boolean;
  autoSlideInterval?: number;
  slides: string[];
}) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval]);

  // Set up an additional interval to auto-click every 10 seconds
  useEffect(() => {
    const autoClickInterval = setInterval(next, 90000);
    return () => clearInterval(autoClickInterval);
  }, []);

  return (
    <div className="overflow-hidden relative">
      <motion.div
        className="flex transition-transform ease-out duration-500"
        initial={false}
        animate={{ x: `-${curr * 100}%` }}
        transition={{ ease: "easeOut", duration: 0.5 }}
      >
        {slides.map((img, index) => (
          <img key={index} src={img} alt="" className="w-full flex-shrink-0" />
        ))}
      </motion.div>
      {slides.length > 1 && (
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={prev}
            className="p-1 rounded-full shadow bg-white/10 text-gray-800 hover:bg-white/50 transition-transform duration-300"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="p-1 rounded-full shadow bg-white/10 text-gray-800 hover:bg-white/50 transition-transform duration-300"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
      <div className="absolute bottom-4 right-0 left-0 ">
        <div className="flex items-center justify-center lg:justify-end gap-2 h-4 mx-8">
          {slides.map((_, i) => (
            <div
              className={`
              transition-all  bg-white rounded-full
              ${curr === i ? "w-2 h-2" : "bg-opacity-70 w-1 h-1 "}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
