import React from "react";
import About from "./components/About";
import Skill from "./components/Skill";

export default function Home() {
  return (
    <div className="p-5 md:p-10">
      <About />
      <Skill />
    </div>
  );
}
