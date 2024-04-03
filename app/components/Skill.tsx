import React from "react";
import { skills } from "../utils/constant";

export default function Skill() {
  return (
    <div className="">
      <p className="text-5xl text-center"> My <span className="font-extrabold">Skill</span></p>
       <div className="flex flex-wrap gap-5 my-10 lg:justify-between justify-center">
       {skills.map((item,index)=><div className={`${index===2 && "bg-gray-900 text-gray-50"} border-2 border-gray-900 w-36 h-36 flex flex-col justify-center items-center rounded-md gap-5`} key={index}><item.icon /> <p>{item.name}</p> </div>)}
       </div>
    </div>
  );
}
