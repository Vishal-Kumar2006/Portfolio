import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./Footer.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail, SiLeetcode } from "react-icons/si"; // Added LeetCode icon

const Footer = () => {
  const links = {
    linkedIn: "https://www.linkedin.com/in/vishal-kumar-8043b5302/",
    github: "https://github.com/Vishal-Kumar2006",
    leetcode: "https://leetcode.com/u/9Fkvv6JpxM/",
    email: "vishalkumar438455@mail.com",
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Copyright */}
        <p className="footer-text">&copy; {new Date().getFullYear()} Vishal. All Rights Reserved.</p>

        {/* Navigation Links */}
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Social Links */}
        <div className="footer-socials">
          
          <a href={links.linkedIn} id="linkedin-text">
            <FaLinkedin/>
            <p>LinkedIn</p>
          </a>

          <a href={links.github} id="github-text">
            <FaGithub/>
            <p>GitHub</p>
          </a>

          <a href={links.leetcode} id="leetcode-text">
            <SiLeetcode/>
            <p>LeetCode</p>
          </a>

          <a href={`mailto:${links.email}`} id="email-text">
            <SiGmail/>
            <p>Email</p>
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;