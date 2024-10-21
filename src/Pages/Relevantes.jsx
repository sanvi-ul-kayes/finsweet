import React from "react";
import Container from "./../Components/Container";
import HeaddingH5 from "./../ComponentsHeader/HeaddingH5";
import HeaddingH2 from "../ComponentsHeader/HeaddingH2";
import RBoxes from "./../Components/RBoxes";
import RIcone from "../Components/RIcone";
import { GiFlowerTwirl } from "react-icons/gi";
import RH4 from "../Components/RH4";
import RIconeBox from "../Components/RIconeBox";
import Rp from "../Components/Rp";
import { PiWavesBold } from "react-icons/pi";
import { GiSelfLove } from "react-icons/gi";
import Header from "../ComponentsHeader/Header";

const Relevantes = () => {
  return (
    <div className="[#E5E5E5] mt-[128px] mb-[128px] ">
      <Container>
        <Header>
          <HeaddingH5 childern="sub-headline" />
          <HeaddingH2 childern="a church that's relevant" />
        </Header>
        <div className="mt-[64px] flex justify-between">
          <RBoxes>
            <RIconeBox>
              <RIcone children={<GiFlowerTwirl />} />
            </RIconeBox>
            <RH4 children="About us" />
            <Rp children="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
          </RBoxes>
          <RBoxes>
            <RIconeBox>
              <RIcone children={<PiWavesBold />} />
            </RIconeBox>
            <RH4 children="Get involved" />
            <Rp children="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
          </RBoxes>
          <RBoxes>
            <RIconeBox>
              <RIcone children={<GiSelfLove />} />
            </RIconeBox>
            <RH4 children="Giving back" />
            <Rp children="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
          </RBoxes>
        </div>
      </Container>
    </div>
  );
};

export default Relevantes;
