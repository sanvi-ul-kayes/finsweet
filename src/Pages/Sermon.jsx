import React from "react";
import HeaddingH5 from "../ComponentsHeader/HeaddingH5";
import HeaddingH2 from "../ComponentsHeader/HeaddingH2";
import { FaLongArrowAltRight } from "react-icons/fa";
import Header from "./../ComponentsHeader/Header";
import { CiClock2 } from "react-icons/ci";
import { BsBalloon } from "react-icons/bs";
import Button from "./../Components/Button";
import Container from "./../Components/Container";

const Sermon = () => {
  return (
    <div className="bg-[#E5E5E5] pt-[128px]">
      <Container>
        <Header>
          <HeaddingH5 childern="Upcoming SERMONS" />
          <HeaddingH2 childern="join us and become part of something great" />
        </Header>
        <div className="flex justify-center mt-[64px]  pb-[128px] ">
          <div className="w-[435px] px-[90px] py-[61px] bg-[#FFF5EB] relative">
            <h6 className="text-[#A54E2B] leading-[8%] text-[12px] mb-4 font-bold">
              Upcoming Event
            </h6>
            <h2 className="w-[156px] text-6 font-bold mb-4">
              WATCH AND LISTEN TO OUR SERMONS
            </h2>
            <p className="text-4 leading-6 font-normal text-[#161722] mb-8 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
            <div className="flex text-center">
              <CiClock2 className="text-[20px]" />
              <h3 className="w-[137px] text-4 leading-6 font-normal">
                Friday 23:39 IST Saturday 11:20 ISD
              </h3>
            </div>
            <div className="flex text-center">
              <BsBalloon className="text-[20px]" />
              <h3 className="w-[137px] text-4 leading-6 font-normal mb-8">
                Friday 23:39 IST Saturday 11:20 ISD
              </h3>
            </div>
            <Button
              style={{
                background: "black",
                color: "#FFD2A4",
              }}
              Navname="Register"
            />
            <div className="absolute top-3 right-3 ">
              <h2 className="font-bold">20</h2>
              <h3 className="text-[#161722]">JULY</h3>
            </div>
          </div>
          <div className="">
            <div>
              <img
                className="h-full w-full"
                src="/Images/Image.jpg"
                alt="SERMON IMAGE"
              />
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="inline-flex items-center text-center gap-[11px]">
            <h3 className="text-2xl font-normal leading-[32px]">
              View all Sermons
            </h3>
            <FaLongArrowAltRight className="text-2xl" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Sermon;
