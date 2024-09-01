import React, { useEffect, useState } from "react";
import Container from "./container";
import { useAnimate } from "framer-motion";

export default function Header() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(scope.current, { opacity: [0, 1] }, { delay: 4 });
  }, [scope, animate]);

  return (
    <header ref={scope} className=" fixed top-0 w-full h-12">
      <Container>
        <div
          // ref={scope}
          className="h-full flex justify-between md:flex-row items-center text-white"
        >
          <a className="flex items-center font-sohneKraftig text-base">A.C.M</a>

          {/* NAVBAR */}
          <nav className="md:ml-auto flex flex-wrap items-center justify-center font-sohneBuch font-medium text-sm ">
            <a className="mr-5">À Propos</a>
            <a className="mr-5">Portfolio</a>
            <a className="">Contact</a>
          </nav>
        </div>
      </Container>
    </header>
  );
}
