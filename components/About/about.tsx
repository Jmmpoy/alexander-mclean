import React from "react";
import Container from "../container";
import Title from "../Title";
import heroImage from "../../public/images/hero-image.avif";

export default function About() {
  const text1 =
    "Exceptuer efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Punctual adipiscing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquid, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.";

  const text2 =
    "Exceptuer efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Punctual adipiscing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquid, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.";

  return (
    <Container extraClasses="pt-[5rem] pb-[6rem]">
      <div className="relative">
        <Title title="À propos" lineSize="158" />
        <section className=" mt-24 lg:grid lg:grid-cols-12 gap-y-[10rem] relative space-y-16 ">
          <div className="space-y-16 lg:space-y-0 col-span-12 grid lg:grid-cols-subgrid">
            <div className="w-full order-1 lg:col-span-5">
              <img src={heroImage.src} className="w-full" />
            </div>
            <div className=" w-full order-2 lg:col-start-7 lg:col-end-13 flex items-center font-sohneKraftig text-blue">
              {text1}
            </div>
          </div>

          <div className="space-y-16 lg:space-y-0 col-span-12 grid lg:grid-cols-subgrid">
            <div className="w-full order-1 lg:col-span-5 lg:order-2 lg:col-start-7 lg:col-end-13">
              <img src={heroImage.src} className="w-full" />
            </div>
            <div className="w-full order-2 lg:order-1 lg:col-span-5 flex items-center font-sohneKraftig text-blue">
              {text1}
            </div>
          </div>

          <div className="top-0 w-full absolute h-full flex px-14">
            <svg
              className="m-auto left-0 right-0 top-0 bottom-0"
              width="817"
              height="282"
              viewBox="0 0 817 282"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.7569 207.952C17.792 207.479 13.7244 206.272 10.5777 204.059C6.237 201.187 3.3244 196.263 2.16067 190.414C0.931916 182.916 2.5074 174.317 7.5351 164.408C31.2649 116.639 128.93 38.7227 184.497 23.2309C188.545 22.2485 192.242 25.3323 192.832 30.5834C193.421 35.8322 190.909 40.7877 186.861 41.7701C140.494 54.5807 42.6032 127.832 19.8204 174.322C16.2664 181.64 16.4246 184.66 16.5849 185.222C16.5611 185.495 16.6976 186.327 17.8917 186.986C37.7814 200.632 140.277 151.329 207.941 118.945C238.193 104.326 266.906 90.6539 288.323 81.7573C318.806 69.347 329.934 68.4896 334.056 78.7235C340.104 93.2397 326.516 108.077 309.476 126.686C300.725 136.238 282.533 156.105 282.912 163.797C284.242 165.288 291.433 168.979 325.376 162.364C351.247 157.445 385.862 147.886 425.813 136.922C535.2 106.864 685.387 65.6492 808.462 75.1621C812.393 75.5351 815.351 79.9175 814.883 85.3414C814.439 90.4925 810.96 94.5337 806.823 94.1425C685.61 84.807 536.505 125.576 427.761 155.423C318.168 185.463 273.389 196.786 268.258 169.236C264.884 150.329 281.926 131.719 299.887 112.104C305.645 105.818 313.934 96.767 317.991 90.8631C301.042 93.8992 252.291 117.421 212.258 136.579C123.014 179.759 54.8236 211.002 22.7569 207.952Z"
                fill="#0D428B"
                fill-opacity="0.05"
              />
            </svg>
          </div>
        </section>
      </div>
    </Container>
  );
}
