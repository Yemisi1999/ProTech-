import React from "react";

const H3Heading = ({ className, children }) => {
  return (
    <div
      style={{ fontFamily: "Noto Serif" }}
      className={`lg:text-[24px] font-[500]  ${className}`}
    >
      {children}
    </div>
  );
};

export default H3Heading;
