import React from "react";
import HeaddingH5 from "../ComponentsHeader/HeaddingH5";
import HeaddingH2 from "../ComponentsHeader/HeaddingH2";
import HeaddingPera from "./../ComponentsHeader/HeaddingPera";
import Button from "./../Components/Button";
import Header from "./../ComponentsHeader/Header";
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
      <div className="relative">
        <img className="absolute" src="Images/COmpo1.png" alt="" />
      </div>
      <Header>
        <HeaddingH5 childern="our mission & vision" />
        <HeaddingH2 childern="celebrate WITH US" />
        <HeaddingPera childern="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      </Header>
    </div>
  );
};

export default Compassion;
