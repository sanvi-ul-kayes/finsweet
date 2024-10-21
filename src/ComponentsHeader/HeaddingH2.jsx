import React from "react";

const HeaddingH2 = ({ childern, style }) => {
  return (
    <div
      style={style}
      className="font-bold text-[48px] leading-[64px] uppercase"
    >
      {childern}
    </div>
  );
};

export default HeaddingH2;
