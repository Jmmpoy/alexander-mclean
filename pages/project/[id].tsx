import Container from "@/components/container";
import React from "react";
import heroImage from "../../public/images/hero-image.avif";
import landing from "../../public/images/LANDING.png";

const ProjectPage = () => {
  const images = [heroImage.src, landing.src, heroImage.src, landing.src];
  return (
    <div className="relative h-screen bg-red-300 pt-28">
      <Container extraClasses="mt-12">
        <div className="h-[40vh] bg-red-300">yo</div>
      </Container>
    </div>
  );
};

export default ProjectPage;
