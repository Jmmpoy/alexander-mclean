import React from "react";
import heroImage from "../../public/images/hero-image.avif";
import Title from "../Title";

const Portfolio = () => {
  return (
    <div className="bg-white p-6">
      <Title title="PORTFOLIO" lineSize="158" />
      <div className="">
        <div className="mt-24 columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-3 [&>img:not(:first-child)]:mt-8">
          <img src={heroImage.src} />
          <img src={heroImage.src} />
          <img src={heroImage.src} />
          <img src={heroImage.src} />
          <img src={heroImage.src} />
          <img src={heroImage.src} />
          <img src={heroImage.src} />
          <img src={heroImage.src} />
          <img src={heroImage.src} />
          <img src={heroImage.src} />
          <img src={heroImage.src} />
          <img src={heroImage.src} />
          <img src={heroImage.src} />
          <img src={heroImage.src} />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
