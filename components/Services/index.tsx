import React from "react";
import Container from "../container";
import Title from "../Title";
import Accordion from "./accordion";
import photoIcon from "../../public/images/PHOTO.webp";
import prIcon from "../../public/images/PR.webp";
import communityIcon from "../../public/images/community.webp";
import { useScroll, useTransform } from "framer-motion";

export default function Services() {
  const services = [
    {
      id: 1,
      name: "Photo & Vidéo",
      icon: photoIcon,
      services: [
        {
          id: 1,
          name: "Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui  international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power ",
        },
      ],
    },
    {
      id: 2,
      icon: communityIcon,
      name: "Community Management",
      services: [
        {
          id: 1,
          name: "Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui  international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power ",
        },
      ],
    },
    {
      id: 3,
      icon: prIcon,
      name: "Relations presse & traduction",
      services: [
        {
          id: 1,
          name: "Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui  international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power ",
        },
      ],
    },
  ];

  return (
    <Container extraClasses="Content-Container py-12 lg:py-24">
      <Title title="Services" lineSize="100" />
      <ul className="mt-24">
        {services.map((service) => {
          return (
            <Accordion
              id={service.id}
              name={service.name}
              services={service.services}
              isLast={service.id === services.length - 1}
              icon={service.icon}
            />
          );
        })}
      </ul>
    </Container>
  );
}
