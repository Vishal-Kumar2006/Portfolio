import "./Body.css";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

const Body = () => {
  return (
    <div className="Body">
      <div className="scroll-slide"> <Home/> </div>
      <About/>
      <Projects/>
      <Contact/>
      
    </div>
  );
};

export default Body;
