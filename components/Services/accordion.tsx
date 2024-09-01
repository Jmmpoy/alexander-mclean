import React, { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  inView,
  animate,
  useAnimate,
  useScroll,
  useTransform,
} from "framer-motion";
import PlusMinusButton from "./plusMinus";

function Accordion({ id, name, services, isLast, icon }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [animateChildren, setAnimateChildren] = useState(false);
  const [scope, animate] = useAnimate();

  const toggleList = (event: any) => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  useEffect(() => {
    inView(scope.current, () => {
      animate(
        scope.current,
        { opacity: [0, 1] },
        { duration: 1, ease: "easeInOut" }
      );
    });
  }, []);

  return (
    <>
      <motion.div
        ref={scope}
        className={`flex flex-col text-blue border-blue overflow-hidden    ${id === 1 ? "border-t-[0.5px] border-b-[0.5px] " : "border-b-[0.5px]"} `}
      >
        <motion.div className="flex justify-between items-center w-full min-h-[120px] py-14">
          <p
            className=" stroke text-2xl  sm:text-3xl md:text-4xl lg:text-5xl mt-0 md:-mt-1
          md:w-1/3 pr-2 "
          >{`0${id}`}</p>
          <div className="flex-1 flex items-center ">
            <img
              src={icon.src}
              className="w-6 h-6 lg:w-8 lg:h-8 ml-6 lg:ml-0 mr-8"
            />
            <motion.h3
              initial={false}
              onClick={toggleList}
              className={` text-xl xsm:text-2xl  sm:text-3xl md:text-4xl lg:text-5xl tracking-tight mb-0 uppercase transition duration-150 ease-in-out hover:opacity-65  `}
            >
              {name}
            </motion.h3>
          </div>
          <PlusMinusButton toggleList={toggleList} id={id} />
        </motion.div>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.section
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              key="content"
              onAnimationComplete={() => setAnimateChildren(true)}
            >
              <motion.ul className="mb-12">
                {services.map((service: any) => {
                  const isFirst = service.id === 1 ? "mt-0" : "mt-4";

                  return (
                    <>
                      <div className="flex justify-between items-center w-full ">
                        <p className="md:w-1/3 pr-2 text-transparent">""</p>
                        <div className="flex-1  ">
                          <motion.li
                            initial={{ opacity: 0 }}
                            animate={{
                              opacity: animateChildren === true ? 1 : 0,
                            }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className={`${isFirst} text-base sm:text-xl md:text2-xl  text-offWhite font-founders `}
                            key={service.id}
                          >
                            {service.name}
                          </motion.li>
                        </div>
                        <span />
                      </div>
                    </>
                  );
                })}
              </motion.ul>
            </motion.section>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}

export default Accordion;
