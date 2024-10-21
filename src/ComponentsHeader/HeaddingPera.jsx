import React from "react";

const HeaddingPera = ({ childern, width = "" }) => {
  return (
    <div
      className={`text-4 font-normal leading-[24px] max-w-[846px] mx-auto ${width}`}
    >
      {childern}
    </div>
  );
};

export default HeaddingPera;
