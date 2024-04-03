// constants.ts
import { FaGithubAlt } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { DeveloperInfo, LinkType, NavButtons } from "./typeDefine";

export const developerInfo: DeveloperInfo = {
  name: "AhsanDev404",
  fullName: "Ahsan",
  gender: "male",
  type: "MERN Stack",
  country: "Pakistan",
  description:
    "With a solid foundation in MERN stack development, I specialize in crafting robust web and mobile applications. My expertise extends to Next.js and React Native, enabling me to deliver seamless user experiences across platforms. Passionate about the intersection of technology and innovation, I harness the power of artificial intelligence (AI) to develop intelligent solutions that optimize processes and drive business growth.",

};

export const links: LinkType[] = [
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/ahsandev404/",
    icon: FaLinkedinIn,
  },
  {
    name: "github",
    link: "https://github.com/AhsanDev404",
    icon: FaGithubAlt,
  }
];

export const navButtons: NavButtons[] = [
  {
    name: "AboutMe",
  },
  {
    name: "Skills",
  },
  {
    name: "Experience",
  },
  {
    name: "Projects",
  },
  {
    name: "Contact",
  },
];
