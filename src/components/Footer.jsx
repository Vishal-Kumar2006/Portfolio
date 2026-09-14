import React from "react";
import "./Footer.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail, SiLeetcode } from "react-icons/si";

const Footer = ({ scrollToSection }) => {
  const links = {
    linkedIn: "https://www.linkedin.com/in/vishal-kumar-8043b5302/",
    github: "https://github.com/Vishal-Kumar2006",
    leetcode: "https://leetcode.com/u/9Fkvv6JpxM/",
    email: "vishalkumar438455@mail.com",
  };

  const handleNavigation = (section) => {
    scrollToSection(section);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Copyright */}
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Vishal. All Rights Reserved.
        </p>

        {/* Navigation Links */}
        <div className="footer-links">
          <button onClick={() => handleNavigation("home")}>Home</button>

          <button onClick={() => handleNavigation("projects")}>Projects</button>

          <button onClick={() => handleNavigation("contact")}>Contact</button>
        </div>

        {/* Social Links */}
        <div className="footer-socials">
          <a
            href={links.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            id="linkedin-text">
            <FaLinkedin />
            <p>LinkedIn</p>
          </a>

          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            id="github-text">
            <FaGithub />
            <p>GitHub</p>
          </a>

          <a
            href={links.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            id="leetcode-text">
            <SiLeetcode />
            <p>LeetCode</p>
          </a>

          <a href={`mailto:${links.email}`} id="email-text">
            <SiGmail />
            <p>Email</p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
