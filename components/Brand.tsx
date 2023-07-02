import React from "react";
import Image from "next/image";
import Logo1 from "public/logo-1.png";
import Logo2 from "public/logo-2.png";
import Logo3 from "public/logo-3.png";
import Logo4 from "public/logo-4.png";
import Logo5 from "public/logo-5.png";

const Brand = () => {
  return (
    <div className="bg-brand-bg h-[300px] -mt-16 bg-top">
      <div className="flex justify-evenly items-center pt-32">
        <Image src={Logo1} alt="brand-logo" />
        <Image src={Logo2} alt="brand-logo" />
        <Image src={Logo3} alt="brand-logo" />
        <Image src={Logo4} alt="brand-logo" />
        <Image src={Logo5} alt="brand-logo" />
      </div>
    </div>
  );
};

export default Brand;
