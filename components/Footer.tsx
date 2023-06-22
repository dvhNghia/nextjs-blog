import Image from "next/image";
import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="flex justify-between items-center">
      <div>@2023 Website. All rights reversed.</div>
      <div className="flex justify-between items-center gap-2">
        <FaFacebook />
        <FaGithub />
        <FaInstagram />
        <FaTwitter />
      </div>
    </div>
  );
}

export default Footer;
