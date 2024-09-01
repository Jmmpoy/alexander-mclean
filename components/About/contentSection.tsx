import React from "react";

interface ContentSectionProps {
  imageSrc: string;
  text: string;
  imageOrder: string;
  textOrder: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({
  imageSrc,
  text,
  imageOrder,
  textOrder,
}) => {
  return (
    <div className="space-y-16 lg:space-y-0 col-span-12 grid lg:grid-cols-subgrid">
      <div className={`w-full ${imageOrder} lg:col-span-5`}>
        <img src={imageSrc} className="w-full" alt="Hero" />
      </div>
      <div
        className={`w-full ${textOrder} lg:col-start-7 lg:col-end-13 flex items-center font-sohneKraftig text-blue`}
      >
        {text}
      </div>
    </div>
  );
};

export default ContentSection;
