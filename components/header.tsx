"use client";

import React, { useEffect, useState } from "react";
import { useAnimate } from "framer-motion";
import { BurgerMenu } from "./burgerMenu";
import SideBarMenu from "./sideBar";

export default function header({
  isSideMenuVisible,
  setIsSideMenuVisible,
}: any) {
  const [scope, animate] = useAnimate();

  // Etat pour la gestion de la hauteur du header et la taille du logo
  const [isScrolled, setIsScrolled] = useState(false);

  // Etat pour la gestion de la couleur du fond
  const [isBackgroundBlue, setIsBackgroundBlue] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Gérer la taille du logo et la hauteur du header à partir de 50px de défilement
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Gérer la couleur de fond à partir de 90% de la hauteur de la fenêtre
      if (window.scrollY > window.innerHeight * 0.95) {
        setIsBackgroundBlue(true);
      } else {
        setIsBackgroundBlue(false);
      }
    };

    // Ajout de l'écouteur de défilement
    window.addEventListener("scroll", handleScroll);

    // Nettoyage lors du démontage du composant
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation du header et du logo à partir de 50px
  useEffect(() => {
    animate(
      scope.current,
      {
        height: isScrolled ? "4rem" : "6rem", // Hauteur du header
      },
      {
        duration: 0.3, // Durée de l'animation plus longue pour la fluidité
        ease: "easeInOut", // Transition fluide en douceur
      }
    );

    // Animation de la taille du logo
    animate(
      ".acm-logo",
      {
        fontSize: isScrolled ? "1.5rem" : "2.5rem", // Taille du logo
      },
      {
        duration: 0.3, // La durée de l'animation pour le logo
        ease: "easeInOut", // Douce transition
      }
    );
  }, [isScrolled, animate, scope]);

  // Animation du background color à partir de 80vh + animation
  useEffect(() => {
    animate(
      ".header-background",
      {
        backgroundColor: isBackgroundBlue
          ? "rgba(246, 247, 251, 0.7)"
          : "transparent",

        backdropFilter: isBackgroundBlue ? "blur(5.3px)" : "blur(0px)",
      },
      {
        duration: 0.5, // Rendre le changement de couleur un peu plus lent
        ease: "easeInOut", // Transition fluide de la couleur
      }
    );
  }, [isBackgroundBlue, animate]);

  // Animation d'apparition initiale (fade-in)
  useEffect(() => {
    animate(scope.current, { opacity: [0, 1] }, { delay: 4 });
  }, [scope, animate]);

  // animation de la couleur
  useEffect(() => {
    animate(
      ".header-background",
      {
        color: isBackgroundBlue ? "#2159A7" : "white", // Couleur de fond bleue ou transparente
      },
      {
        duration: 0.5, // Rendre le changement de couleur un peu plus lent
        ease: "easeInOut", // Transition fluide de la couleur
      }
    );
  }, [isBackgroundBlue, animate]);

  return (
    <header ref={scope} className="fixed top-0 w-full z-20">
      <div
        className={`header-background h-full w-full flex justify-between items-center  px-8 backdrop-filter backdrop-blur-xl bg-opacity-20`}
      >
        <div className="logo-infos-container flex items-center">
          <div>
            <a className="acm-logo flex items-center justify-center font-sohneKraftig text-base font-bold ">
              A.C.M
            </a>
          </div>
        </div>

        {/* NAVBAR */}
        <nav>
          <div className=" hidden md:visible md:ml-auto md:flex flex-wrap items-center justify-center font-sohneBuch font-medium text-sm">
            <a href="#About-Section" className="mr-5">
              À Propos
            </a>
            <a href="#Services-Section" className="mr-5">
              Services
            </a>
            <a href="#Portfolio-Section" className="mr-5">
              Portfolio
            </a>
            <a href="#Contact-Section">Contact</a>
          </div>

          <BurgerMenu
            isBackgroundBlue={isBackgroundBlue}
            isSideMenuVisible={isSideMenuVisible}
            setIsSideMenuVisible={setIsSideMenuVisible}
          />
        </nav>
      </div>
    </header>
  );
}
