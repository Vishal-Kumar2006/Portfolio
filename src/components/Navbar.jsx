import { useState } from "react";
import "./Navbar.css";

const Navbar = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (section) => {
    scrollToSection(section);
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo">Vishal's Portfolio</h1>

        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </button>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li className="option">
            <button
              onClick={() => {
                handleNavigation("home");
                setIsOpen(false);
              }}>
              Home
            </button>
          </li>
          <li className="option">
            <button
              onClick={() => {
                handleNavigation("about");
                setIsOpen(false);
              }}>
              About
            </button>
          </li>
          <li className="option">
            <button
              onClick={() => {
                handleNavigation("projects");
                setIsOpen(false);
              }}>
              Projects
            </button>
          </li>
          <li className="option">
            <button
              onClick={() => {
                handleNavigation("contact");
                setIsOpen(false);
              }}>
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
