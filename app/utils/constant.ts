// constants.ts
import { FaGithubAlt } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { DeveloperInfo, LinkType, NavButtons, Skill } from "./typeDefine";
import { 
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaAngular,
  FaVuejs,
  FaNodeJs,
  FaDatabase,
  FaDocker,
  FaKubernetes,
  FaGitAlt,
  FaSass,
  FaBootstrap,
  FaTailwind,
  FaGraphql,
  FaApi,
  FaMobileAlt,
  FaRedux
} from 'react-icons/fa';
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

export const skills: Skill[] = [
  { name: 'HTML', icon: FaHtml5 },
  { name: 'CSS', icon: FaCss3Alt },
  { name: 'JavaScript', icon: FaJs },
  { name: 'React', icon: FaReact },
  { name: 'Angular', icon: FaAngular },
  { name: 'Vue.js', icon: FaVuejs },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'Express.js', icon: FaNodeJs },
  { name: 'MongoDB', icon: FaDatabase },
  { name: 'MySQL', icon: FaDatabase },
  { name: 'Docker', icon: FaDocker },
  // { name: 'Kubernetes', icon: FaKubernetes },
  { name: 'Git', icon: FaGitAlt },
  { name: 'SASS', icon: FaSass },
  { name: 'Bootstrap', icon: FaBootstrap },
  // { name: 'Tailwind CSS', icon: FaTailwind },
  // { name: 'GraphQL', icon: FaGraphql },
  // { name: 'REST API', icon: FaApi },
  { name: 'React Native', icon: FaMobileAlt },
  // { name: 'Redux', icon: FaRedux },
];