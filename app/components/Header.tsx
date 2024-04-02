"use client";
import Image from "next/image";
import React, { useState } from "react";
import { logo } from "../utils/assets";
import { MdOutlineFileDownload, MdClose } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import constant from "../utils/constants.json"

interface NavButtons {
  name: string;
}

const navButtons: NavButtons[] = [
  {
    name: "AboutMe",
  },
  {
    name: "Skills",
  },
  {
    name: "About",
  },
  {
    name: "Projects",
  },
  {
    name: "Contact",
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex items-center justify-around md:justify-evenly text-gray-900 py-2 md:py-5 border-b ">
      <div className="flex items-center gap-2">
        <Image src={logo} alt="logo" />
        <h5 className="font-bold text-lg">{constant.name}</h5>
      </div>
      <div className="hidden md:block">
        {navButtons.map((item: NavButtons, index) => (
          <button
            className="mx-3 font-semibold hover:text-gray-500"
            key={index}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className="hidden md:block">
        <button className="flex items-center gap-2 bg-gray-900 text-gray-100 py-2 px-3 rounded-sm">
          Resume <MdOutlineFileDownload size={20} />
        </button>
      </div>
      <div className="block md:hidden">
        <button onClick={toggleMenu}>
          <RxHamburgerMenu size={20} />
        </button>
      </div>
      {menuOpen && (
        <div className="fixed inset-0 mt-14 flex items-start  justify-center bg-gray-50 bg-opacity-900 z-50">
          <div className="bg-white border shadow-xl p-4 m-2 rounded-lg w-screen max-w-md ">
            <div className="flex justify-end">
              <button
                className="p-2 rounded-full bg-gray-900 text-gray-50 "
                onClick={toggleMenu}
              >
                <MdClose />
              </button>
            </div>
            {navButtons.map((item: NavButtons, index) => (
              <button
                className="block w-full text-left py-2 px-4 hover:bg-gray-100 rounded-sm"
                key={index}
                onClick={toggleMenu}
              >
                {item.name}
              </button>
            ))}
            <button
              className="w-full flex gap-2 justify-center py-2 px-4 mt-2 bg-gray-900 text-gray-100 rounded-md hover:bg-gray-800"
              onClick={toggleMenu}
            >
              Resume <MdOutlineFileDownload size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
