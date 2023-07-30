import React from "react";
import { FaLinkedin, FaWhatsapp, FaEnvelope, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-4 text-center md:flex flex-row-reverse justify-between px-5">
      <div className="flex justify-center space-x-4 items-center mb-4">
        <a
          href="https://www.linkedin.com/in/ahsandev404/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-300 transition duration-300"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://wa.me/+923036188826"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:text-green-300 transition duration-300"
        >
          <FaWhatsapp size={24} />
        </a>
        <a
          href="mailto:ahsan.dev.404.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-500 hover:text-yellow-300 transition duration-300"
        >
          <FaEnvelope size={24} />
        </a>
        <a
          href="https://github.com/AhsanDev404"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-300 transition duration-300"
        >
          <FaGithub size={24} />
        </a>
      </div>
      <p className="text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
