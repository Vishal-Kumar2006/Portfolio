import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ContactForm from "./components/ContactForm.jsx";
import bg_Image from "./BG_Image.jpg";

import "./App.css";
import "./Body.css";

function App() {
  return (
    <div className="App">
      <Router>
        <img className="bg-video" src={bg_Image}></img>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact-form" element={<ContactForm />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
