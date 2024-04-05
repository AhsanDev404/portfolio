"use client";
import Image from "next/image";
import React, { useState } from "react";
import { projects } from "../utils/constant";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

interface Tab {
  name: string;
}

const tabs: Tab[] = [
  {
    name: "All",
  },
  {
    name: "MERN",
  },
  {
    name: "NEXT",
  },
  {
    name: "ReactNative",
  },
];

export default function Project() {
  const [type, setType] = useState(tabs[0].name);
  return (
    <div className="bg-gray-900 text-gray-50 -mx-5 md:-mx-10 md:p-10 p-5">
      <p className="text-3xl text-center">
        {" "}
        My <span className="font-extrabold">Projects</span>
      </p>

      <div className="my-5">
        {tabs.map((item, index) => (
          <button
            key={index}
            onClick={() => setType(item.name)}
            className={`mx-2 border-b-4 ${
              item.name === type ? "border-b-gray-50" : "border-b-gray-900"
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>

      <div>
        {projects.map((item, index) => {
          if (type === "All" || type === item.type) {
            return (
              <div
                key={index}
                className={` lg:flex ${
                  index % 2 === 0 && "flex-row-reverse"
                }  items-center lg:m-10 m-5 gap-5`}
              >
                <Image src={item.image} alt="project image" />
                <div className="lg:w-[50%] ">
                  <p className="text-4xl font-bold">{item.number}</p>
                  <p className="text-3xl font-bold my-5">{item.title}</p>
                  <p className="text-gray-500 mb-5"> {item.description}</p>
                  <Link className="text-gray-50 " href={item.link}><FaExternalLinkAlt size={25} /></Link>
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}
