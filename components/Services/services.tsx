import React from "react";
import Container from "../container";
import Title from "../Title";
import heroImage from "../../public/images/hero-image.avif";

export default function Services() {
  interface TextRowProps {
    title: string;
    content: string;
    reverse?: boolean;
    svgDirection?: "up" | "down";
    isLast?: boolean;
  }

  const TextRow = ({
    title,
    content,
    reverse,
    svgDirection,
    isLast,
  }: TextRowProps) => {
    return (
      <>
        {reverse ? (
          <div
            className={` flex flex-col-reverse  md:flex-row my-20  leading-6 min-h-[160px]`}
          >
            <div className=" flex font-sohneKraftig text-white  md:w-1/2 mt-8 md:mt-0">
              <p className="text-sm"> {content}</p>
            </div>

            <div className=" flex justify-start md:justify-end mt-8 md:mt-0 md:w-1/2">
              <h1 className="text-[40px]  text-white font-sohneHalbfett  h-full leading-10 text-left md:text-right">
                {title}
              </h1>
            </div>
          </div>
        ) : (
          <div className="flex-col  md:flex-row md:flex leading-6 my-20 min-h-[160px]">
            <div className="md:w-1/2">
              <h1 className="text-[40px]  text-white font-sohneHalbfett w-full h-full leading-10">
                {title}
              </h1>
            </div>

            <div className=" mt-8 md:mt-0 flex font-sohneKraftig text-white  md:w-1/2">
              <p className="text-sm"> {content}</p>
            </div>
          </div>
        )}

        {!isLast &&
          (svgDirection === "up" ? (
            <div className="w-full">
              <svg
                width="100%"
                height="16"
                viewBox="0 0 1280 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1269.1 3.2696C851.385 13.3065 431.069 15.579 12.3758 10.0871"
                  stroke="white"
                  stroke-opacity="0.1"
                  stroke-width="6"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          ) : (
            <div className="w-full">
              <svg
                width="100%"
                height="16"
                viewBox="0 0 1280 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1269.1 3.2696C851.385 13.3065 431.069 15.579 12.3758 10.0871"
                  stroke="white"
                  stroke-opacity="0.1"
                  stroke-width="6"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          ))}
      </>
    );
  };
  const text1 =
    "Exceptuer efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Punctual adipiscing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquid, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.";

  const text2 =
    "Exceptuer efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Punctual adipiscing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquid, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.";

  const text3 =
    "Exceptuer efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Punctual adipiscing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquid, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.";

  const text4 =
    "Exceptuer efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Punctual adipiscing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquid, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.";
  return (
    <div className="pt-20 pb-8  h-full bg-blue">
      <div className="relative mb-[86px] mx-8">
        <Title title="Services" lineSize="158" isWhite={true} />
        <section className="mt-32 md:mt-40 gap-y-[5rem]  md:gap-y-[10rem] relative  ">
          <div className="w-full">
            <svg
              width="100%"
              height="16"
              viewBox="0 0 1280 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.3758 12.7304C431.069 2.6935 851.385 0.421 1269.1 5.9129"
                stroke="white"
                stroke-opacity="0.1"
                stroke-width="6"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <TextRow title="Photo" content={text1} svgDirection={"up"} />
          <TextRow
            title="Community Management"
            content={text1}
            svgDirection={"down"}
            reverse={true}
          />
          <TextRow title="Video" content={text1} svgDirection={"up"} />
          <TextRow
            title="Relations Presse & Traduction"
            content={text1}
            reverse={true}
            svgDirection={"down"}
            isLast={true}
          />
        </section>
      </div>
    </div>
  );
}
