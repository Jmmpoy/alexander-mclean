import React from "react";

const Container = ({ children, extraClasses, isFullWidth, style, id }: any) => {
  return (
    <div
      id={id}
      style={style}
      className={`Container ${isFullWidth ? "px-8" : "mx-8"} h-full ${extraClasses}`}
    >
      {children}
    </div>
  );
};

export default Container;
