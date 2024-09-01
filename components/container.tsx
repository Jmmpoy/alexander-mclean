import React from "react";

const Container = ({ children, extraClasses, isFullWidth }: any) => {
  return (
    <div
      className={`Container ${isFullWidth ? "px-8" : "mx-8"} h-full ${extraClasses}`}
    >
      {children}
    </div>
  );
};

export default Container;
