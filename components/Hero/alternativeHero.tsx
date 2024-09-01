import React, { useState } from "react";
import Container from "../container";
import HeroLines from "./heroLines";
import BackgroundImage from "./backgroundImage";
import Intro from "../Intro/Intro";

export default function AlternativeHero() {
  const [introIsFinished, setIntroIsfinished] = useState(false);
  return (
    <div className="relative h-screen">
      <Intro setIntroIsfinished={setIntroIsfinished} />
      <Container>
        <div className="Hero-Container relative bg-palette-blue rounded-b-[2rem]">
          <main
            className="hero h-screen sm:h-screen flex flex-col justify-center pb-[5vh]"
            id="hero"
          >
            <HeroLines introIsFinished={introIsFinished} />
          </main>
        </div>

        <BackgroundImage />
      </Container>
    </div>
  );
}
