import Project from "./Project.jsx";

import ParkEase from "../assets/ParkEase.mp4";
import SAHK from "../assets/SAHK.mp4";
import MeetHub from "../assets/MeetHub.mp4";
import Shift from "../assets/Shift.mp4";
import WanderLust from "../assets/WanderLust.mp4";
import WeatherApp from "../assets/WeatherApp.mp4";

import "./Projects.css";

const projects = [
  // ParkEase: A Smart Parking PlatForm: Deployed (Need Check in)
  {
    name: "ParkEase: Smart Parking Platform",
    video: ParkEase,
    description:
      "A full-stack MERN application that helps users discover, review, and evaluate parking spots efficiently. Implemented secure JWT-based authentication with 24-hour token expiry, a dynamic review system, and a scalable REST API. Focused on real-world usability, data-driven decisions, and backend security.",
    techStack: "React.js, Node.js, Express.js, MongoDB, JWT, Bcrypt",
    github: "https://github.com/Vishal-Kumar2006/ParkEase",
    demo: "https://parkease-6xhi.onrender.com",
  },

  // SAHK: A Recipe Website : Not deployed (Need Deployment)
  {
    name: "SAHK: Recipe Discovery Platform",
    video: SAHK,
    description:
      "A full-stack MERN application for discovering recipes based on meal types and cooking methods. Designed dynamic filtering logic and structured REST APIs to efficiently handle categorized data. Focused on scalable backend design and intuitive user experience.",
    techStack: "React.js, Node.js, Express.js, MongoDB",
    github: "https://github.com/Vishal-Kumar2006/SAHK",
    demo: "https://github.com/Vishal-Kumar2006/SAHK",
  },

  // MeetHub: A Zoom Meetig Clone Website : Deployed (Need Check in)
  {
    name: "MeetHub: Real-Time Video Conferencing Platform",
    video: MeetHub,
    description:
      "Built a real-time video conferencing system using WebRTC for peer-to-peer communication and Socket.io for signaling and event handling. Enabled features like audio/video streaming, screen sharing, and live chat with low-latency communication. Designed the system to handle real-time interactions and bidirectional data flow across multiple clients.",
    techStack: "React.js, Node.js, Express.js, MongoDB, WebRTC, Socket.io",
    github: "https://github.com/Vishal-Kumar2006/MeetHub",
    demo: "https://meethub-frontend-6keq.onrender.com/",
  },

  // WanderLust: AirBNB Clone Website : Not Deployed (Need Deployment)
  {
    name: "WanderLust: Property Booking Platform",
    video: WanderLust,
    description:
      "Built a full-stack property listing platform inspired by Airbnb, implementing server-side rendering using EJS and a RESTful backend with Node.js and Express. Designed relational data models for users and listings, integrated secure authentication using Passport.js, and handled image uploads via Cloudinary. Focused on backend architecture, dynamic content delivery, and real-world application flow.",
    techStack: "Node.js, Express.js, MongoDB, EJS, Passport.js, Cloudinary",
    github: "https://github.com/Vishal-Kumar2006/Wanderlust",
    demo: "https://github.com/Vishal-Kumar2006/Wanderlust",
  },

  // Employee Shift Management : Not Deployed(Need Deployment)
  {
    name: "Employee Shift Board: Role-Based Scheduling System",
    video: Shift,
    description:
      "Developed a full-stack employee shift management system focusing on backend correctness and business rule enforcement. Implemented JWT-based authentication, role-based authorization, and validated complex constraints such as overlapping shifts and minimum working hours. Structured the backend using service-layer architecture, middleware, and centralized validation for maintainability and scalability.",
    techStack: "React.js, Node.js, Express.js, MongoDB, JWT",
    github: "https://github.com/Vishal-Kumar2006/Employee_Shift",
    demo: "https://github.com/Vishal-Kumar2006/Employee_Shift",
  },

  // Weather App : Deployed
  {
    name: "Weather App: Real-Time Data Dashboard",
    video: WeatherApp,
    description:
      "Developed a real-time weather dashboard using React, integrating external APIs to fetch and display dynamic data. Managed asynchronous requests, handled API responses efficiently, and built a responsive UI for clear data visualization.",
    techStack: "React.js, Vite, Axios, OpenWeather API, CSS",
    github: "https://github.com/Vishal-Kumar2006/WeatherApp",
    demo: "https://weather-app-ten-sigma-57.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="Projects">
      <div className="headings">
        <h2 className="heading">My Projects</h2>
        <p className="sub-heading">Here are some of my best works.</p>
        <p>Please Scrool Up</p>
      </div>
      {projects.map((p, idx) => {
        return (
          <>
            <Project key={idx} project={p} />;
          </>
        );
      })}
    </section>
  );
};

export default Projects;
