import { animate } from "framer-motion";
import React, { useEffect, useState } from "react";
import SideBarMenu from "./sideBar";

export const BurgerMenu = ({
  isBackgroundBlue,
  isSideMenuVisible,
  setIsSideMenuVisible,
}: any) => {
  return (
    <button
      className="relative"
      onClick={() => setIsSideMenuVisible(!isSideMenuVisible)}
    >
      <svg
        className="w-6 visible md:hidden burger-menu"
        viewBox="0 0 28 20"
        fill={isBackgroundBlue ? "#2159A7" : "white"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26.997 10.98c-.52.057-.979-.112-1.288-.476-.323-.386-.42-.934-.272-1.473a.478.478 0 00-.254-.584c-2.135-1.081-3.366.059-4.453 1.064-.755.698-1.467 1.357-2.501 1.47-.521.058-.979-.113-1.286-.477-.324-.386-.427-.936-.271-1.473.114-.394-.221-.567-.256-.584-.533-.27-1.01-.402-1.443-.431-1.299-.09-2.196.74-3.012 1.495-.754.698-1.466 1.357-2.5 1.47-.521.058-.978-.113-1.286-.477-.324-.386-.427-.936-.271-1.473.114-.394-.221-.567-.255-.584-2.134-1.081-3.366.059-4.454 1.064-.754.698-1.466 1.357-2.5 1.47a.5.5 0 00.109.994c1.361-.15 2.269-.989 3.07-1.73.969-.895 1.692-1.558 2.984-1.056-.089.718.103 1.427.552 1.96a2.39 2.39 0 001.857.843 2.8 2.8 0 00.249-.014.516.516 0 00.056-.002c1.361-.15 2.269-.99 3.07-1.73.966-.894 1.688-1.554 2.975-1.06a.067.067 0 00.008.004c-.088.718.104 1.427.553 1.959.459.545 1.124.844 1.857.844.1 0 .2-.006.302-.017 1.363-.15 2.271-.989 3.072-1.73.968-.896 1.692-1.559 2.983-1.056-.088.718.105 1.427.554 1.96a2.391 2.391 0 001.857.843c.1 0 .2-.005.303-.017a.5.5 0 00-.11-.996zM26.997 17.84c-.52.056-.979-.112-1.288-.477-.323-.385-.42-.934-.272-1.473a.478.478 0 00-.254-.584c-2.135-1.081-3.366.059-4.453 1.065-.755.698-1.467 1.356-2.501 1.469-.521.058-.979-.112-1.286-.477-.324-.385-.427-.936-.271-1.473.114-.393-.221-.566-.256-.584-.533-.27-1.01-.401-1.443-.43-1.299-.09-2.196.74-3.012 1.495-.754.698-1.466 1.356-2.5 1.469-.521.058-.978-.112-1.286-.477-.324-.385-.427-.936-.271-1.473.114-.393-.221-.566-.255-.584-2.134-1.08-3.366.059-4.454 1.065-.754.698-1.466 1.356-2.5 1.469a.5.5 0 00.109.994c1.361-.149 2.269-.988 3.07-1.729.969-.896 1.692-1.559 2.984-1.056-.089.718.103 1.427.552 1.959a2.39 2.39 0 001.857.844 2.8 2.8 0 00.249-.014.516.516 0 00.056-.003c1.361-.15 2.269-.989 3.07-1.73.966-.893 1.688-1.553 2.975-1.059a.067.067 0 00.008.003c-.088.718.104 1.428.553 1.96.459.544 1.124.843 1.857.843.1 0 .2-.006.302-.017 1.363-.149 2.271-.989 3.072-1.729.968-.896 1.692-1.559 2.983-1.057-.088.718.105 1.428.554 1.96a2.391 2.391 0 001.857.843c.1 0 .2-.005.303-.016a.5.5 0 00-.11-.996zM26.997 4.121c-.52.056-.979-.112-1.288-.477-.323-.385-.42-.934-.272-1.473a.478.478 0 00-.254-.583c-2.135-1.082-3.366.058-4.453 1.063-.755.699-1.467 1.357-2.501 1.47-.521.058-.979-.112-1.286-.477-.324-.385-.427-.936-.271-1.473.114-.393-.221-.566-.256-.583-.533-.271-1.01-.403-1.443-.431-1.299-.09-2.196.74-3.012 1.494-.754.699-1.466 1.357-2.5 1.47-.521.058-.978-.112-1.286-.477-.324-.385-.427-.936-.271-1.473.114-.393-.221-.566-.255-.583C5.515.506 4.283 1.645 3.195 2.65c-.754.699-1.466 1.357-2.5 1.47a.5.5 0 00.109.994c1.361-.149 2.269-.989 3.07-1.729.969-.896 1.692-1.559 2.984-1.057-.089.718.103 1.427.552 1.96a2.39 2.39 0 001.857.844 2.8 2.8 0 00.249-.014.516.516 0 00.056-.003c1.361-.15 2.269-.989 3.07-1.73.966-.893 1.688-1.554 2.975-1.059a.067.067 0 00.008.003c-.088.719.104 1.427.553 1.96.459.545 1.124.843 1.857.843.1 0 .2-.005.302-.016 1.363-.15 2.271-.99 3.072-1.73.968-.896 1.692-1.559 2.983-1.057-.088.719.105 1.427.554 1.96a2.391 2.391 0 001.857.843c.1 0 .2-.005.303-.016a.5.5 0 00-.11-.996z"
          fill="currentColor"
          stroke="currentColor"
          stroke-width=".5"
        ></path>
      </svg>
    </button>
  );
};
