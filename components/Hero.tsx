"use client";
import React from "react";
import HeroImage from "public/hero.jpg";
import Image from "next/image";

const Hero = () => {
  const handleScroll = () => {
    console.log("clicked");
  };

  return (
    <div>
      <Image src={HeroImage} alt="Hero" fill className="object-cover -z-10" />
    </div>
  );
};

export default Hero;
