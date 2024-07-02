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
  FaGitAlt,
  FaSass,
  FaBootstrap,
  FaMobileAlt,
  FaPython,
  FaJava,
  FaPhp,
  FaAws,
} from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiPostgresql, SiMysql, SiRedis, SiMongodb, SiCplusplus, SiC, SiJira, SiAsana, SiTrello, SiSlack, SiMicrosoftteams, SiCypress, SiJest } from 'react-icons/si';
import { project,opendoc,siy,police,hospi, algo, shpherd, sencare, mcp } from "./assets";

export const developerInfo: DeveloperInfo = {
  name: "AhsanDev404",
  fullName: "Muhammad Ahsan",
  gender: "male",
  type: "MERN Stack",
  country: "Pakistan",
  description:
    "Passionate and results-oriented MERN Stack Developer with over two years of experience specializing in backend development. Adept at constructing robust and scalable web applications, with deep expertise in JavaScript and its frameworks, particularly Express.js for backend tasks. Highly skilled in MongoDB for database management and ORM operations. Proficient in designing efficient, maintainable server-side logic, managing databases, and integrating APIs. Additionally experienced in frontend technologies, including Next.js and React, ensuring seamless and responsive user interfaces. Known for effective collaboration with cross-functional teams to deliver high-quality software solutions tailored to client and business requirements.",
  skills: `Passionate and results-oriented MERN Stack Developer with over two years of experience specializing in backend development. Adept at constructing robust and scalable web applications, with deep expertise in JavaScript and its frameworks, particularly Express.js for backend tasks. Highly skilled in MongoDB for database management and ORM operations. Proficient in designing efficient, maintainable server-side logic, managing databases, and integrating APIs. Additionally experienced in frontend technologies, including Next.js and React, ensuring seamless and responsive user interfaces. Known for effective collaboration with cross-functional teams to deliver high-quality software solutions tailored to client and business requirements.`,
  contact: "I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.",
  mail: "ahsan.dev.404@gmail.com",
  phone: "+92 303 5251358",
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
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'React', icon: FaReact },
  { name: 'Next.js', icon: FaReact },
  { name: 'Redux', icon: FaReact },
  { name: 'Vue.js', icon: FaVuejs },
  { name: 'Angular', icon: FaAngular },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'Express.js', icon: FaNodeJs },
  { name: 'Nest.js', icon: FaNodeJs },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'MySQL', icon: SiMysql },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'Redis', icon: SiRedis },
  { name: 'SQLite', icon: SiMongodb },
  { name: 'Sequelize', icon: FaDatabase },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Material UI', icon: FaReact },
  { name: 'Chakra UI', icon: FaReact },
  { name: 'React Native', icon: FaMobileAlt },
  { name: 'Docker', icon: FaDocker },
  { name: 'Git', icon: FaGitAlt },
  { name: 'SASS', icon: FaSass },
  { name: 'Bootstrap', icon: FaBootstrap },
  { name: 'Cypress', icon: SiCypress },
  { name: 'Jest', icon: SiJest },
  { name: 'PHP', icon: FaPhp },
  { name: 'AWS', icon: FaAws },
  { name: 'Python', icon: FaPython },
  { name: 'C++', icon: SiCplusplus },
  { name: 'C', icon: SiC },
  { name: 'Java', icon: FaJava },
  { name: 'JIRA', icon: SiJira },
  { name: 'Asana', icon: SiAsana },
  { name: 'Trello', icon: SiTrello },
  { name: 'Slack', icon: SiSlack },
];

export const experience: Experience[] = [
  {
    companyName: "Tekvill",
    position: "Software Engineer",
    learning: "MERN stack development, AI applications with OpenAI, web and mobile platforms",
    tenure: "Feb 2024 - Present",
    image:"/tekvill.jpeg"
  },
  {
    companyName: "Rubik's Solution",
    position: "Associate Software Engineer",
    learning: "MERN stack development, web and mobile platforms, innovative solutions",
    tenure: "Aug 2023 - Jan 2024",
  image:"/tekvill.jpeg"
  },
  {
    companyName: "IVT Technologies",
    position: "Internship Trainee",
    learning: "MERN stack development, teamwork, web development",
    tenure: "Jun 2023 - Jul 2023",
 image:"/tekvill.jpeg"
  }
];

export const projects: Project[] = [
  {
    number: "01",
    title: "AI Document Analyzer",
    description: "Developed an AI-powered document analysis system to automate the extraction of information from various document formats. Implemented advanced text recognition and analysis algorithms, utilized machine learning techniques, and integrated features for document organization, search, and retrieval.",
    image: opendoc,
    type: "MERN",
    link: "https://www.opendoc.ai/",
  },
  {
    number: "02",
    title: "AI Doctor Record Session and Generate Prescription",
    description: "Created a platform to record doctor-patient sessions and automatically generate prescriptions based on diagnoses. Implemented user-friendly interface, utilized NLP techniques, and integrated features for generating prescriptions based on medical history and treatment guidelines.",
    image: siy,
    type: "MERN",
    link: "https://siy.ai/",
  },
  {
    number: "03",
    title: "Police Library and Student Management System",
    description: "Developed a management system for police library and student management using satellite imaging and ML techniques. Integrated user authentication, implemented data entry and anomaly detection, and automated reporting and data analysis.",
    image: police,
    type: "MERN",
    link: "https://ims-client.vercel.app/",
  },
  {
    number: "04",
    title: "HOSPIPRO – Hotel Management System",
    description: "Developed a management portal to streamline hotel operations, ensuring efficient workflow and user-friendly interfaces. Implemented booking management and customer service tools, integrated email and SMS notifications, and created comprehensive documentation.",
    image: hospi,
    type: "NEXT",
    link: "https://hospi-pro-frontend.vercel.app/",
  },
  {
    number: "05",
    title: "Algomnia",
    description: "Developed a platform for algorithmic trading and investment analysis, leveraging machine learning to analyze market trends and manage investment portfolios. Implemented machine learning algorithms, developed interactive dashboards, and integrated real-time data feeds.",
    image: algo,
    type: "MERN",
    link: "https://www.algomnia.com/",
  },
  {
    number: "06",
    title: "Probate Shepherd",
    description: "Created a comprehensive platform for managing probate cases and legal documentation, streamlining workflows for attorneys and clients. Implemented features for tracking case progress, managing client information, and generating legal documents.",
    image: shpherd,
    type: "MERN",
    link: "https://www.probateshepherd.com/",
  },
  {
    number: "07",
    title: "Master Dashboard",
    description: "Developed a comprehensive dashboard for monitoring and managing various business metrics and data analytics. Implemented dynamic data visualizations, integrated user authentication, and developed modular and reusable components.",
    image: sencare,
    type: "MERN",
    link: "https://master.d3ph5hlmhewiob.amplifyapp.com/dashboard",
  },
  {
    number: "08",
    title: "MCCP Listing",
    description: "Created a listing platform for managing and displaying multi-category classified ads with advanced filtering and search capabilities. Developed advanced search and filtering functionalities, implemented user-friendly interfaces, and integrated responsive design principles.",
    image: mcp,
    type: "NEXT",
    link: "https://mccp-listing-eight.vercel.app/",
  },
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
  
];
