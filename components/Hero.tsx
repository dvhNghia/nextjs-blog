"use client";
import React from "react";
import HeroImage from "public/hero.jpg";
import Image from "next/image";
import Button from "./Button";
import { FaRegCalendarAlt, FaFeather, FaArrowRight } from "react-icons/fa";

const Hero = () => {
  const handleScroll = () => {
    console.log("clicked");
  };

  return (
    <div className="w-full h-[75vh] mx-auto flex flex-col justify-center items-center">
      <div className="">
        <Image src={HeroImage} alt="Hero" fill className="object-cover -z-10" />
      </div>
      <div className="flex flex-col justify-center items-center w-[1000px] mx-auto h-full overflow-hidden text-center">
          <div className="flex gap-2 my-2">
            <span className="flex gap-2 items-center">
              <FaRegCalendarAlt /> October 11, 2019
            </span>
            <span className="flex gap-2 items-center">
              <FaFeather /> by Alisa Michaels
            </span>
          </div>
          <h1 className="text-5xl font-extrabold">
            EVERYDAY URBAN CONCRETE JUNGLE
          </h1>
          <span className="w-1/2 font-thin text-sm my-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
            consectetur adipisci expedita assumenda possimus molestias.
          </span>
          <div>
            <Button
              title="READ MORE"
              containerStyles="bg-primary px-8 py-2 font-bold"
              handleClick={() => console.log("ReadMore")}
            />
          </div>
        </div>
    </div>
  );
};

export default Hero;
