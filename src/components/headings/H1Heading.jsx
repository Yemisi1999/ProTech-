import React from "react";

const H1Heading = ({ className, children }) => {
  return (
    <div
      style={{ fontFamily: "Noto Serif" }}
      className={`lg:text-[32px] font-[600]  ${className}`}
    >
      {children}
    </div>
  );
};

export default H1Heading;
