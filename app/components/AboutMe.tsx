import React from "react";
import Image from "next/image";
import { heroFemale, heroMale } from "../utils/assets";
import Link from "next/link";
import {developerInfo, links} from "../utils/constant"

export default function AboutMe() {
  return (
    <div className="lg:h-[80vh] py-10">
      <div className="flex lg:flex-row flex-col-reverse gap-5 justify-center items-center">
        <div>
          <p className="text-2xl  lg:text-5xl leading-tight">
            Hello I’am{" "}
            <span className="font-bold">
              {developerInfo.fullName}. {developerInfo.type}{" "}
            </span>{" "}
            <span className=" font-extrabold text-transparent border-text">
              Developer
            </span>{" "}
            Based In <span className="font-bold">{developerInfo.country}.</span>{" "}
          </p>
          <p className="my-5 text-gray-500">{developerInfo.description}</p>
          <div className="flex gap-5">
            {links.map((item: any, index) => (
              <Link
                rel="noopener noreferrer"
                target="_blank"
                className={` rounded border-2 border-gray-900 p-2 ${
                  item.name == "linkedin" && "bg-gray-900 text-gray-50"
                } `}
                href={item.link}
                key={index}
              >
                {<item.icon />}
              </Link>
            ))}
          </div>
        </div>
        <div></div>
        <Image
          className={`w-full ${
            developerInfo.gender === "female" ? "lg:w-5/12" : "lg:w-7/12"
          }`}
          src={developerInfo.gender === "female" ? heroFemale : heroMale}
          alt="hero image"
        />
      </div>
    </div>
  );
}
