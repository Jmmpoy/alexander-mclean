import React from "react";

interface TitleProps {
  title: string;
  lineSize: string;
  isWhite?: boolean
}

interface TitleUnderlineProps {
  lineSize: string;
}

const TitleUnderline = ({ lineSize }: TitleUnderlineProps) => {
  return (
    <svg
      width={lineSize}
      height="16"
      viewBox="0 0 158 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_7781_99)">
        <path
          d="M1.34491 12.7304C52.9072 2.69351 104.79 0.420997 156.472 5.9129"
          stroke="#EEE1D9"
          stroke-width="6"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_7781_99">
          <rect width="158" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const Title = ({ title, lineSize, isWhite }: TitleProps) => {
  return (
    <div className="flex space-x-2">
      <span className={`text-3xl ${isWhite ? "text-white" : "text-blue"}`}>● </span>
      <div className="inline-block">
        {" "}
        <h1 className={`uppercase text-3xl ${isWhite ? "text-white" : "text-blue"}  `}>{title}</h1>
        <TitleUnderline lineSize={lineSize} />
      </div>
    </div>
  );
};

export default Title;
