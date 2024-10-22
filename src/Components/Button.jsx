import React from "react";

const Button = ({ Navname, style }) => {
  return (
    <div>
      <button
        style={style}
        className="bg-[#FFD2A4] text-black py-5 px-[48px] text-[16px] rounded-[12px] "
      >
        {Navname}
      </button>
    </div>
  );
};

export default Button;
