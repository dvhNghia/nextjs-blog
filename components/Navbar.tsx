"use client";
import Link from "next/link";
import React from "react";
import Logo from "public/logo.png";
import Image from "next/image";
import { FaMapSigns } from "react-icons/fa";

const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Pages", url: "/page" },
  { id: 3, title: "Destinations", url: "/destination" },
  { id: 5, title: "Blogs", url: "/blog" },
  { id: 6, title: "Shop", url: "/shop" },
  { id: 7, title: "Landing", url: "/landing" },
];

function Navbar() {
  const handleLogout = () => {
    console.log("log out!");
  };

  return (
    <header className="flex justify-between items-center h-[100px] my-5 border-b border-white sm:px-5 md:px-10">
      <div className="w-[200px] font-bold text-2xl flex justify-center items-center gap-5">
        <FaMapSigns className="text-2xl" />
        <span>Destinations</span>
      </div>
      <div className="w-[1000px] grow flex gap-5 justify-center items-center">
        <nav className="flex justify-between items-center gap-10 font-bold text-lg">
          {links.slice(0, 3).map((link) => (
            <Link key={link.id} href={link.url} className="nav__btn">
              {link.title.toUpperCase()}
            </Link>
          ))}
        </nav>
        <div>
          <Image
            src={Logo}
            alt="logo"
            width={150}
            height={150}
            className="object-contain"
          />
        </div>
        <nav className="flex justify-between items-center gap-10 font-bold text-lg">
          {links.slice(3).map((link) => (
            <Link key={link.id} href={link.url} className="nav__btn">
              {link.title.toUpperCase()}
            </Link>
          ))}
        </nav>
      </div>
      <div className="w-[250px] font-bold text-2xl">Search</div>
    </header>
  );
}

export default Navbar;
