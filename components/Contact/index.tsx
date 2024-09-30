import React, { useRef } from "react";
import Container from "../container";
import Title from "../Title";
import { Facebook, Instagram, Linkedin } from "react-feather";
import { motion, useInView } from "framer-motion";

const Contact = () => {
  const content = [
    "Vous avez un projet en tête ?",
    "Une envie de dire bonjour,",
    "Contactez-moi.",
  ];

  const Socials = () => {
    return (
      <div className="flex sm:flex-col gap-3 mt-8 sm:mt-20 text-white">
        <div className="flex gap-x-1 items-end">
          <a
            className="font-sohneBuch font-medium uppercase"
            href="https://www.instagram.com/achampymclean/.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
        </div>
        <div className="flex gap-x-1 items-end">
          <a
            className="font-sohneBuch font-medium lowercase"
            href="https://www.linkedin.com/in/alexanderchampymclean/?originalSubdomain=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
          </a>
        </div>
        <div className="flex gap-x-1 items-end">
          <a
            className="font-sohneBuch font-medium lowercase"
            href="https://www.facebook.com/alexander.mclean.35?ref=bookmarks"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook />
          </a>
        </div>
      </div>
    );
  };

  // Reference for detecting when the contact section is in view
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Container
      id="Contact-Section"
      isFullWidth
      extraClasses="mt-32 min-h-[60vh] bg-blue relative"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <motion.div
        ref={ref}
        className="fixed bottom-[25%] left-0 px-8 w-full"
        initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and y translation
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }} // Animate to opacity 1 and move to y 0 when in view
        transition={{ duration: 0.8, ease: "easeInOut" }} // Smooth transition
      >
        <Title isWhite title="Contact" lineSize="100" />
        <div className="lines-socials-container flex flex-col sm:flex-row sm:justify-between">
          <div className="lines-container">
            <ul className="mt-8 sm:mt-20">
              {content.map((line, index) => {
                const underlineStyle =
                  line === "Contactez-moi."
                    ? "relative after:bg-blue after:absolute after:h-1 after:w-0 after:bottom-[-5px] after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
                    : "";
                return (
                  <li
                    key={index}
                    className={`w-fit text-xl whitespace-nowrap xsm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sohneHalbfett font-bold tracking-tight text-white uppercase ${underlineStyle}`}
                  >
                    {line}
                  </li>
                );
              })}
            </ul>
          </div>
          <Socials />
        </div>
      </motion.div>

      <footer className="pt-8 pb-4 px-8 bg-gray-100 fixed bottom-0 left-0 w-full border-t-orange-50">
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-white font-sohneBuch">
          <p className="mb-2 md:mb-0">
            © 2024 créé par Mpoy Jean-Marc, tous droits réservés.
          </p>
        </div>
      </footer>
    </Container>
  );
};

export default Contact;
