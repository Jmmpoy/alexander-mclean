import React from "react";
import Container from "../container";
import Title from "../Title";
import { Facebook, Instagram, Linkedin } from "react-feather";
const Contact = () => {
  const content = [
    "Vous avez un projet en tête ?",
    "Une envie de dire bonjour,",
    "Contactez-moi.",
  ];

  const Socials = () => {
    return (
      <div className="flex sm:flex-col gap-3 mt-8 sm:mt-20 text-blue">
        <div className="flex gap-x-1 items-end">
          <a
            className="font-sohneBuch font-medium uppercase"
            href="https://www.https://www.instagram.com/achampymclean/.com"
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
  return (
    <Container extraClasses="Contact-Section mt-32 mb-32">
      <Title title="Contact" lineSize="100" />
      <div className="lines-socials-container flex flex-col sm:flex-row sm:justify-between">
        <div className="lines-container">
          {" "}
          <ul className="mt-8 sm:mt-20">
            {content.map((line) => {
              const underlineStyle =
                line === "Contactez-moi."
                  ? "relative after:bg-blue   after:absolute after:h-1 after:w-0 after:bottom-[-5px] after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
                  : "";
              return (
                <li
                  className={`w-fit text-xl whitespace-nowrap xsm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sohneHalbfett font-bold tracking-tight text-blue uppercase ${underlineStyle}`}
                >
                  {line}
                </li>
              );
            })}
          </ul>
        </div>
        <Socials />
      </div>
    </Container>
  );
};

export default Contact;
