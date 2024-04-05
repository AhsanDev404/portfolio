// constants.ts
import { FaGithubAlt } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { DeveloperInfo, Experience, LinkType, NavButtons, Project, Skill, Tab } from "./typeDefine";
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
  // FaKubernetes,
  FaGitAlt,
  FaSass,
  FaBootstrap,
  // FaTailwind,
  // FaGraphql,
  // FaApi,
  FaMobileAlt,
  // FaRedux
} from 'react-icons/fa';
import { project } from "./assets";
export const developerInfo: DeveloperInfo = {
  name: "AhsanDev404",
  fullName: "Ahsan",
  gender: "male",
  type: "MERN Stack",
  country: "Pakistan",
  description:
    "With a solid foundation in MERN stack development, I specialize in crafting robust web and mobile applications. My expertise extends to Next.js and React Native, enabling me to deliver seamless user experiences across platforms. Passionate about the intersection of technology and innovation, I harness the power of artificial intelligence (AI) to develop intelligent solutions that optimize processes and drive business growth.",
    skills: `I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me. \nI began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more. When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.`,
  contact :"I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.",
  mail:"ahsan.dev.404@gmail.com",
  phone:"+92 303 525135"
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

export const experience: Experience[] = [
  {
    companyName: "Tech Innovations Inc.",
    position: "Software Engineer",
    learning: "Advanced algorithms and data structures, team collaboration, project management",
    tenure: "June 2018 - August 2021",
    icon: FaLinkedinIn
  },
  {
    companyName: "Digital Solutions Co.",
    position: "Web Developer",
    learning: "Front-end development with React.js, responsive design principles, RESTful API integration",
    tenure: "September 2021 - Present",
    icon: FaLinkedinIn
  },
  {
    companyName: "Startup X",
    position: "Product Manager",
    learning: "Product lifecycle management, market analysis, user experience design",
    tenure: "January 2016 - May 2018",
    icon: FaLinkedinIn
  }
];

export const projects: Project[] = [
  {
    number: "01",
    title: "Crypto Screener Application",
    description: "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
    image: project,
    type: "MERN",
    link:"#",
  },
  {
    number: "02",
    title: "E-commerce Website Redesign",
    description: "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
    image: project,
    type: "NEXT",
    link:"#",
  },
  {
    number: "03",
    title: "Mobile App Development",
    description: "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
    image: project,
    type: "ReactNative",
    link:"#",
  },
  // Add more projects here...
];




export const tabs: Tab[] = [
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
