import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Accordion, AccordionItem } from "@nextui-org/accordion";

function ListItem({ i, id, name, services }: any) {
  const [expanded, setExpanded] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const toggleList = (event: any) => {
    setExpanded(id);
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <>
      <motion.div
        className="flex  min-h-32  items-center "
        animate={{ backgroundColor: isOpen ? "#FF0088" : "" }}
      >
        <motion.header
          initial={false}
          onClick={toggleList}
          className={`w-[90%]  text-4xl  sm:text-3xl md:text-4xl lg:text-5xl font-sohneKraftig tracking-tight mb-0 uppercase text-blue  `}
        >
          {name}
        </motion.header>

        {/* <PlusMinusButton toggleList={toggleList} id={id} /> */}
      </motion.div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.6, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <motion.ul className="mt-16">
              {services.map((service: any) => {
                const isFirst = service.id === 1 ? "mt-0" : "mt-4";
                return (
                  <motion.li
                    className={`${isFirst} text-base sm:text-xl md:text2-xl  text-offWhite font-founders`}
                    key={service.id}
                  >
                    {service.name}
                  </motion.li>
                );
              })}
            </motion.ul>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
}

export default ListItem;
