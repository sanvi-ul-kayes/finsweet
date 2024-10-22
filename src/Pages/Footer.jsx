import React from "react";
import Container from "../Components/Container";
import { CiFacebook } from "react-icons/ci";
import { FiTwitter } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import Button from "./../Components/Button";

const Footer = () => {
  return (
    <div className="bg-[#161722] text-white py-[64px]">
      <Container>
        <div className="flex justify-between">
          <div>
            <img src="/Images/Footer.png" alt="Footer" />
            <p className="text-[12px] font-normal mt-4 mb-8 ">
              © Copyright Finsweet 2022
            </p>
            <p className="text-[12px] font-normal">(480) 555-0103</p>
            <p className="my-4 text-[12px] font-normal">
              4517 Washington Ave.{" "}
            </p>
            <p className="text-[12px] font-normal">finsweet@example.com</p>
          </div>
          <div>
            <header className="text-[16px] font-normal leading-[24px] mb-5">
              Quicklinks
            </header>
            <h6 className="text-[12px] font-normal  mb-5">About us</h6>
            <h6 className="text-[12px] font-normal  mb-5">Sermons</h6>
            <h6 className="text-[12px] font-normal  mb-5">Events</h6>
            <h6 className="text-[12px] font-normal  mb-5">Blog</h6>
          </div>
          <div>
            <h5 className="mb-5 text-[16px] font-normal leading-[24px]">
              Connect{" "}
            </h5>
            <div className="flex justify-between text-center gap-5">
              <CiFacebook className="text-[#FFD2A4] text-[16px]" />
              <FiTwitter className="text-[#FFD2A4] text-[16px]" />
              <CiLinkedin className="text-[#FFD2A4] text-[16px]" />
            </div>
          </div>
          <div>
            <h2 className="text-[32px] font-bold leading-[44px] max-w-[377px] mb-8">
              Subscribe to get Latest Updates and News
            </h2>
            <div className="w-[512px] border-[1px] border-[#E5E5E5] rounded-[12px] flex  justify-between text-center overflow-hidden">
              <input
                type="text"
                placeholder="Yourmail@gmail.com "
                className="w-[311px] border-[#E5E5E5] p-4 text-white bg-[#161722] outline-none"
              />

              <Button Navname="Subscribe" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
