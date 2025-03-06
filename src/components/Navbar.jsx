import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo">Vishal's Portfolio</h1>

        {/* Hamburger Menu Button */}
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </button>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li className="option">
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li className="option">
            <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          </li>
          <li className="option">
            <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
          </li>
          <li className="option">
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
