import React from "react";
import Home from "./components/Home";
import Skill from "./components/Skill";
import Experience from "./components/Experience";
import About from "./components/About";

export default function Landing() {
  return (
    <div className="p-5 md:p-10">
      <Home />
      <Skill />
      <Experience />
      <About />
    </div>
  );
}
