"use client";
import React from "react";
import HeroImage from "public/hero.jpg";
import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  const handleScroll = () => {
    console.log("clicked");
  };

  return (
    <div className="w-full mx-auto">
      <Image src={HeroImage} alt="Hero" fill className="object-cover -z-10" />
      <div className="h-[700px]">
        <div className="flex flex-col justify-center items-center w-[1000px] mx-auto h-full overflow-hidden text-center">
          <div>
            {/* icon */}
            {/* author */}
          </div>
          <h1 className="text-5xl font-extrabold">
            EVERYDAY URBAN CONCRETE JUNGLE
          </h1>
          <span className="w-1/2 font-thin text-sm my-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
            consectetur adipisci expedita assumenda possimus molestias.
          </span>
          <Button
            title="READ MORE"
            containerStyles="bg-primary px-8 py-2 font-bold"
            handleClick={()=> console.log('ReadMore')}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
