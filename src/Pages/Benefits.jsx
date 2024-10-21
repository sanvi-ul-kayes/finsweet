import React from "react";
import HeaddingH5 from "../ComponentsHeader/HeaddingH5";
import HeaddingH2 from "../ComponentsHeader/HeaddingH2";
import Header from "./../ComponentsHeader/Header";

const Benefits = () => {
  return (
    <div className="pt-[128px] pb-[128px] bg-[#F5F2F0]">
      <Header>
        <HeaddingH5 childern="Watch and listen" />
        <HeaddingH2 childern="THE benefits of joining our church" />
      </Header>
      <div className="flex justify-center gap-6 mt-[64px]  items-center">
        <img src="/Images/Item.png" alt="Item" />
        <img src="/Images/Item (1).png" alt="Item(1)" />
        <img src="/Images/Item (2).png" alt="Item(2)" />
        <img src="/Images/Item (3).png" alt="Item(3)" />
      </div>
    </div>
  );
};

export default Benefits;
