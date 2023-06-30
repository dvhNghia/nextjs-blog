"use client";
import { ButtonProps } from "@/types";
import { FaArrowRight } from "react-icons/fa";
import React from "react";

const Button = ({ title, containerStyles, handleClick }: ButtonProps) => {
  return (
    <button
      disabled={false}
      type={"button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className="flex items-center gap-2">
        {title} <FaArrowRight />
      </span>
    </button>
  );
};

export default Button;
