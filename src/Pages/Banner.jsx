import React from "react";
import Container from "./../Components/Container";
import Button from "./../Components/Button";

const Banner = () => {
  return (
    <div className="h-[663px] bg-hero bg-cover bg-center bg-no-repeat ">
      <Container>
        <div className="pt-[128px]">
          <h6 className="text-bold text-[16px] text-white">
            Welcome to our CHURCH
          </h6>
          <h1 className="text-white text-[64px] text-bold leading-[82px] uppercase ">
            Become a part of <br /> our community
          </h1>
          <Button Navname="Learn more" />
          <div className="flex  mt-[64px] items-center">
            <hr className="w-4 border-2 mr-3" />
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
              sed do.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
