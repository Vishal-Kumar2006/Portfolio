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
    const handleMouseMove = (e) => {
      gsap.to("#cursor", {
        x: e.clientX - 20,
        y: e.clientY - 20,
        duration: 1.5,
        ease: "elastic",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
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
      <Footer />
    </div>
  );
}

export default App;
