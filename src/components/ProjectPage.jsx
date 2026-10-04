import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./ProjectPage.css";
import "./Project.css";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import Reveal from "../Reveal.jsx";

export default function ProjectPage({ projects }) {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="mySwiper">
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="Project">
              <div className="detail">
                <div className="left-Part">
                  <div className="video">
                    <img
                      src={project.image}
                      className="project-video"
                      alt={`${project.name} Image`}
                    />
                  </div>
                </div>

                <div className="right-Part">
                  <div>
                    <h2>{project.name}</h2>
                    <Reveal>
                      <p className="description">{project.description}</p>
                    </Reveal>
                  </div>

                  <div className="tech-stacks">
                    <Reveal>
                      <b>Tech Stacks: </b> {project.techStack}
                    </Reveal>
                  </div>
                </div>
              </div>

              <Reveal>
                <div className="project-links">
                  <div className="demo-link">
                    <a className="project-link-anchor-tag" href={project.demo}>
                      Demo
                    </a>
                  </div>
                  <div className="github-link">
                    <a
                      className="project-link-anchor-tag"
                      href={project.github}>
                      Github Link
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
