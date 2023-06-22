"use client";
import Link from "next/link";
import React from "react";

const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Portfolio", url: "/portfolio" },
  { id: 3, title: "Blog", url: "/blog" },
  { id: 4, title: "About", url: "/about" },
  { id: 5, title: "Contact", url: "/contact" },
  { id: 6, title: "Dashboard", url: "/dashboard" },
];

function Navbar() {
  return (
    <div className="flex justify-between items-center h-[100px]">
      <div className="font-bold text-2xl">Logo</div>
      <div className="flex justify-between items-center gap-5">
        {links.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
        <button
          className="rounded-sm text-white bg-green-400 px-2 py-1"
          onClick={() => {
            console.log("logout!");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;
