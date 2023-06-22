"use client";
import Image from "next/image";
import HeroImage from "public/hero.png";
import React from "react";
import Button from "./Button";

const Hero = () => {
  const handleScroll = () => {
    console.log("clicked");
  };

  return (
    <div className="flex items-center xl:flex-row flex-col gap-5">
      <div className="flex flex-col gap-5 w-full xl:w-1/3 mx-auto">
        <h1 className="text-7xl bg-gradient-to-b from-green-400 to-white bg-clip-text text-transparent">
          Better design for your digital products
        </h1>
        <p>
          Turning your Idea into Reality. We bring together the teams from
          global tech industry.
        </p>
        <Button
          title="Explorer Cars"
          containerStyles="rounded-sm text-white bg-green-400 px-2 py-1"
          handleClick={handleScroll}
        />
      </div>
      <div className="xl:w-2/3 flex justify-end items-end w-full xl:h-[500px]">
        <div className="relative xl:w-full w-[90%] xl:h-[500px] h-[500px] z-0 overflow-hidden">
          <Image src={HeroImage} alt="Hero" fill className="object-contain" />
          <div className="absolute xl:-top-24 xl:-right-1/4 -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full xl:h-screen h-[400px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
