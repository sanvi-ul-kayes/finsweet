import React from "react";
import HeaddingH5 from "../ComponentsHeader/HeaddingH5";
import HeaddingH2 from "../ComponentsHeader/HeaddingH2";
import HeaddingPera from "./../ComponentsHeader/HeaddingPera";
import Button from "./../Components/Button";
import Header from "./../ComponentsHeader/Header";
import { FaLongArrowAltRight } from "react-icons/fa";

const Compassion = () => {
  return (
    <div>
      <Header>
        <HeaddingH5 childern="SUB-HEADLINE" />
        <HeaddingH2 childern="love and compassion" />
        <HeaddingPera childern="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." />
        <br className="mt-[64px]" />
        <Button Navname="Read more" />
      </Header>
      <div className=" flex justify-center items-center gap-8 relative top-[-10px]">
        <img className="mb-[240px]" src="Images/COmpo1.png" alt="COmpo1" />
        <img
          className="mt-[48px] mb-[64px]"
          src="Images/COmpo2.png"
          alt="COmpo2"
        />
        <img className="mb-[240px]" src="Images/COmpo3.png" alt="COmpo3" />
      </div>
      <Header>
        <HeaddingH5 childern="our mission & vision" />
        <HeaddingH2 childern="celebrate WITH US" />
        <HeaddingPera
          width="w-[512px]"
          childern="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </Header>
      <div className="flex justify-center text-center items-center mb-[128px] gap-1">
        <h5>Read More</h5>
        <FaLongArrowAltRight className="text-[18px]" />
      </div>
    </div>
  );
};

export default Compassion;
