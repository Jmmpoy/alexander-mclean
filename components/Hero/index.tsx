import React, { useState } from "react";
import Container from "../container";
import HeroLines from "./heroLines";
import BackgroundImage from "./backgroundImage";
import Intro from "../Intro/Intro";
import BackgroundVideo from "../BackgroundVideo";

export default function Hero() {
  const [introIsFinished, setIntroIsfinished] = useState(false);
  return (
    <div className="relative h-screen ">
      <Intro setIntroIsfinished={setIntroIsfinished} />
      <Container>
        <div className="Hero-Container relative bg-palette-blue rounded-b-[2rem]">
          <main
            className="hero h-screen sm:h-screen flex flex-col justify-center"
            id="hero"
          >
            <HeroLines introIsFinished={introIsFinished} />
          </main>
        </div>

        {/* <BackgroundImage /> */}
        <BackgroundVideo />
      </Container>
    </div>
  );
}
