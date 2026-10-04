import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ToastContainer } from "react-toastify";

import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import ContactForm from "./components/ContactForm.jsx";
import Footer from "./components/Footer.jsx";

import bg_Image from "./BG_Image.jpg";

import "./App.css";

function App() {
  const lenisRef = useRef(null);

  // Initialize Lenis
  useEffect(() => {
    const lenis = new Lenis();
    lenisRef.current = lenis;
    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Custom Cursor
  useEffect(() => {
    let hideTimeout;

    const handleMouseMove = (e) => {
      // Show and move cursor
      gsap.to("#cursor", {
        x: e.clientX - 16,
        y: e.clientY - 15,
        opacity: 1,
        duration: 0.9,
        ease: "elastic",
      });

      // // Reset the timer every time mouse moves
      clearTimeout(hideTimeout);

      // Hide cursor after 1 sec of inactivity
      hideTimeout = setTimeout(() => {
        gsap.to("#cursor", {
          opacity: 0,
          duration: 1,
        });
      }, 1000);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(hideTimeout);
    };
  }, []);

  // Scroll to section using Lenis
  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element && lenisRef.current) {
      lenisRef.current.scrollTo(element);
    }
  };

  return (
    <div className="App">
      <div id="cursor"></div>
      <img className="bg-video" src={bg_Image} alt="BG-Image" />

      <Navbar scrollToSection={scrollToSection} />
      <ToastContainer />
      <main>
        <Home scrollToSection={scrollToSection} />
        <About />
        <Projects />
        <Contact />
        <ContactForm />
      </main>
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}

export default App;
