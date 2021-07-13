import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import Blob from "../../../assets/images/blob.svg";
import StanAloneCar from "../../../assets/images/mclaren-orange-big.png";
import { Button } from "../../components/button";
import { SCREEN } from "../../components/responsive";

const TopSectionContainer = styled.div`
  min-height: 400px;
  margin-top: 6em;
  ${tw`
    w-full
    max-w-screen-2xl
    flex
    justify-between
    pl-3
    pr-3
    lg:pl-12
    lg:pr-12
    `}
`;

const LefContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
    `}
`;

const RightContainer = styled.div`
  ${tw` 
    w-1/2   
    flex    
    flex-col    
    relative
    mt-20 
    `}
`;

const Slogan = styled.h1`
  ${tw`
    font-bold
    text-2xl
    xl:text-6xl
    sm:text-3xl
    md:text-5xl
    lg:font-black
    md:font-extrabold
    text-black
    mb-4
    sm:leading-snug
    lg:leading-normal
    xl:leading-relaxed
    `}
`;

const Description = styled.p`
  ${tw` 
    text-xs
    lg:text-sm
    xl:text-lg
    sm:max-h-full
    overflow-hidden
    max-h-12
    text-gray-800
    `}
`;

const BlobContainer = styled.div`
  width: 20em;
  height: 10em;
  position: absolute;
  right: -5em;
  top: -9em;
  z-index: -1;
  transform: rotate(-30deg);

  img {
    width: 100%;
    height: auto;
    max-height: max-content;
  }

  @media (min-width: ${SCREEN.sm}) {
    width: 40em;
    max-height: 10em;
    right: -9em;
    top: -10em;
    transform: rotate(-25deg);
  }

  @media (min-width: ${SCREEN.lg}) {
    width: 50em;
    max-height: 30em;
    right: -7em;
    top: -15em;
    transform: rotate(-30deg);
  }

  @media (min-width: ${SCREEN.xl}) {
    width: 70em;
    max-height: 30em;
    right: -15em;
    top: -25em;
    transform: rotate(-20deg);
  }
`;

const StandaloneCar = styled.div`
  width: auto;
  height: 10em;
  right: -6em;
  top: -5em;
  position: absolute;
  img {
    width: auto;
    height: 100%;
    max-width: fit-content;
  }

  @media (min-width: ${SCREEN.sm}) {
    height: 16em;
    top: -6em;
    right: -6em;
  }

  @media (min-width: ${SCREEN.lg}) {
    height: 21em;
    top: -8em;
    right: -5em;
  }
  @media (min-width: ${SCREEN.xl}) {
    height: 30em;
    top: -13em;
    right: -9em;
  }
`;

const ButtonsContainer = styled.div`
  ${tw` 
    flex
    flex-wrap 
    mt-2
    `}
`;

export function TopSection() {
  return (
    <TopSectionContainer>
      <LefContainer>
        <Slogan>Rent The Best Qulity Car's With Us</Slogan>
        <Description>
          Always choose the best car from our local stores or order it remotely
          at the best price for you and get the best qulity cars for as long as
          you like
        </Description>
        <ButtonsContainer>
          <Button text="Book Your Ride" />
          <Button text="Sell Your Car" theme="filled" />
        </ButtonsContainer>
      </LefContainer>
      <RightContainer>
        <BlobContainer>
          <img src={Blob} alt="car" />
        </BlobContainer>
        <StandaloneCar>
          <img src={StanAloneCar} alt="car" />
        </StandaloneCar>
      </RightContainer>
    </TopSectionContainer>
  );
}
