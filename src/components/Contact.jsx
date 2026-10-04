import ContactForm from "./ContactForm.jsx";
import Reveal from "../Reveal.jsx";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiGmail } from "react-icons/si";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";

import "./Contact.css";

const Contact = () => {
  const links = {
    linkedIn: "https://www.linkedin.com/in/vishal-kumar-8043b5302/",
    github: "https://github.com/Vishal-Kumar2006",
    leetcode: "https://leetcode.com/u/_vishaloo/",
    email: "vishalkumar438455@mail.com",
  };

  return (
    <section className="contact" id="contact">
      <Reveal>
        <div className="heading">
          <h2 className="heading">Let's Connect</h2>
          <p className="sub-heading">
            Feel free to reach out for collaborations or just a chat.
          </p>
        </div>
      </Reveal>

      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper">
        <SwiperSlide>
          <Reveal>
            <div className="contact-link">
              <a href={links.github} id="github" className="connect-link">
                <FaGithub />
                <p>Github</p>
                <Reveal>
                  <div className="contact-link-achievements-details">
                    <p>
                      <b>
                        20+ Repositories || 15+ Projects || 6+ MERN Applications
                      </b>
                    </p>
                    <p>
                      Real-world full-stack projects with authentication, REST
                      APIs, and scalable backend systems.
                    </p>
                    <p>
                      From UI to backend logic & built everything from scratch.
                    </p>
                  </div>
                </Reveal>
              </a>
            </div>
          </Reveal>
        </SwiperSlide>
        <SwiperSlide>
          <Reveal>
            <div className="contact-link">
              <a href={links.linkedIn} id="linkedin" className="connect-link">
                <FaLinkedin />
                <p>Linked In</p>
                <Reveal>
                  <div className="contact-link-achievements-details">
                    <p>
                      <b>2000+ Professional Connections</b>
                    </p>
                    <p>
                      Sharing projects, achievements, and problem-solving
                      insights consistently.
                    </p>
                    <p>
                      Actively building a strong developer presence and network.
                    </p>
                  </div>
                </Reveal>
              </a>
            </div>
          </Reveal>
        </SwiperSlide>
        <SwiperSlide>
          <Reveal>
            <div className="contact-link">
              <a href={links.leetcode} id="leetcode" className="connect-link">
                <SiLeetcode />
                <p>LeetCode</p>
                <Reveal>
                  <div className="contact-link-achievements-details">
                    <p>
                      <b>1100+ Problems Solved || 500+ Days Streak</b>
                    </p>
                    <p>
                      Strong in Data Structures, Algorithms, and problem-solving
                      consistency.
                    </p>
                    <p>
                      Proven ability to tackle medium-hard problems and optimize
                      solutions.
                    </p>
                  </div>
                </Reveal>
              </a>
            </div>
          </Reveal>
        </SwiperSlide>
        <SwiperSlide>
          <Reveal>
            <div className="contact-link">
              <a
                href={`mailto:${links.email}`}
                id="email"
                className="connect-link">
                <SiGmail />
                <p>Email</p>
                <Reveal>
                  <div className="contact-link-achievements-details">
                    <p>
                      <b>
                        Open to internships, full-time roles, and meaningful
                        collaborations.
                      </b>
                    </p>
                    <p>Let's connect and build something impactful.</p>
                  </div>
                </Reveal>
              </a>
            </div>
          </Reveal>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Contact;
