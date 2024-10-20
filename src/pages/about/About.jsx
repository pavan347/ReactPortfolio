import React from "react";
import "./about.css";

import { FaDownload } from "react-icons/fa";
import { FaHackerrank, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

// import LeetCodeIcon from "../../components/LeetcodeIcon";

import Stats from "../../components/Stats";
// import Info from "../../components/Info";
import CV from "../../assets/GPKResume.pdf";
import { resume } from "../../data";
import ResumeItem from "../../components/ResumeItem";

const About = () => {
  return (
    <div>
      <main className="section container">
        <section className="about">
          <h2 className="section__title">
            About <span>Me</span>
          </h2>

          <div className="about__container grid">
            <div className="about__socials">
              <a
                href="https://www.linkedin.com/in/garapati-pavan-kumar"
                className="about__social-link"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://github.com/pavan347"
                className="about__social-link"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.hackerrank.com/profile/pavan347"
                className="about__social-link"
              >
                <FaHackerrank />
              </a>

              <a
                href="https://leetcode.com/u/pavan347/"
                className="about__social-link"
              >
                <SiLeetcode />
              </a>
            </div>
            <div className="about_info">
              <h3 className="section__subtitle">Personal Info</h3>

              {/* <ul className="info__list grid">
                <Info />
              </ul> */}
              <p className="info__content">
                🎓 I'm currently pursuing my final year B-TECH at Amrita Sai
                Institute of Science and Technology, and I'm passionate about
                diving into the world of AI . 🚀 I am committed to embed
                uniqueness in every touch of mine, ensuring that my
                contributions stand out in any project or endeavor. My approach
                to learning is deeply rooted in project-based methodologies,
                through which I believe I am the ideal candidate for the
                company.
              </p>

              <a href="/" download={CV} className="button">
                Download Cv
                <span className="button__icon">
                  <FaDownload />
                </span>
              </a>
            </div>

            <div className="stats grid">
              <Stats />
            </div>
          </div>
        </section>

        <div className="seperator"></div>

        {/* <section className="sills">
          <h3 className="section__subtitle subtitle__center">My Skills</h3>
          <div className="skills__section">
            <Skills />
          </div>
        </section> */}

        {/* <div className="seperator"></div> */}

        <section className="resume">
          <h3 className="section__subtitle subtitle__center">
            Experience & Education
          </h3>

          <div className="resume__container grid">
            {/* <div className="resume__data">
              {
                resume.map((val) => {
                  if(val.category === "experience"){
                    return <ResumeItem key={val.id} {...val}/>
                  }
                })
              }
            </div> */}

            <div className="resume__data"></div>

            <div className="resume__data">
              {resume.map((val) => {
                if (val.category === "education") {
                  return <ResumeItem key={val.id} {...val} />;
                }
              })}
            </div>

            <div className="resume__data"></div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
