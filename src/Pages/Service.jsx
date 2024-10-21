import React from "react";
import Container from "./../Components/Container";
import HeaddingH2 from "../ComponentsHeader/HeaddingH2";
import HeaddingH5 from "../ComponentsHeader/HeaddingH5";
import Button from "../Components/Button";

const Service = () => {
  return (
    <div className="h-[1500px] bg-service bg-center bg-no-repeat bg-cover mb-[128px] relative">
      <Container>
        <div className="flex max-w-[768px] h-[480px] justify-center items-center py-[72px] px-[48px] gap-[117px] bg-white absolute top-[128px]">
          <div>
            <HeaddingH2
              style={{
                width: "449px",
              }}
              childern="We want to serve the world around us"
            />
            <HeaddingH5
              style={{
                width: "302px",
              }}
              childern="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do."
            />
            <Button Navname="VISIT" />
          </div>
          <div>
            <img src="/Images/Quote.png" alt="Quote" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Service;
