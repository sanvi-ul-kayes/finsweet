import React from "react";

const Button = ({ Navname }) => {
  return (
    <div>
      <button className="bg-[#FFD2A4] text-black py-5 px-[48px] text-[16px] rounded-[12px] my-[10px]">
        {Navname}
      </button>
    </div>
  );
};

export default Button;
