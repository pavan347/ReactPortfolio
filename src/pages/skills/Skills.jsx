import React from "react";
// import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";

import "./skills.css";

import java from "../../assets/skills/java.png";
import javascript from "../../assets/skills/javascript.png";
import python from "../../assets/skills/python.png";
import html from "../../assets/skills/html.png";
import css from "../../assets/skills/css.png";
import git from "../../assets/skills/git.png";
import react from "../../assets/skills/reactjs.png";
import nodejs from "../../assets/skills/nodejs.png";
import expressjs from "../../assets/skills/expressjs.png";
import mongodb from "../../assets/skills/mongodb.png";
import mysql from "../../assets/skills/mysql.png";
import wordpress from "../../assets/skills/wordpress.png";
import aws from "../../assets/skills/aws.png";
import flask from "../../assets/skills/flask.png";

const Skills = () => {
  return (
    <>
      <section className="skills section container">
        <h2 className="section__title">
          My <span>Skills</span>
        </h2>
        <div className="skills__section">
          <div class="skills__container">
            <h2 class="skills__title">Programming Languages</h2>
            <div class="items__container">
              <div class="item">
                <img src={java} alt="Java Logo" class="item-logo" />
                <h2 class="item__title">Java</h2>
              </div>
              <div class="item">
                <img src={javascript} alt="JavaScript Logo" class="item-logo" />
                <h2 class="item__title">JavaScript</h2>
              </div>
              <div class="item">
                <img src={python} alt="Python Logo" class="item-logo" />
                <h2 class="item__title">Python</h2>
              </div>
            </div>
          </div>
          <div class="skills__container">
            <h2 class="skills__title">Front End Technologies</h2>
            <div class="items__container">
              <div class="item">
                <img src={html} alt="HTML Logo" class="item-logo" />
                <h2 class="item__title">HTML</h2>
              </div>
              <div class="item">
                <img src={css} alt="CSS Logo" class="item-logo" />
                <h2 class="item__title">CSS</h2>
              </div>
              <div class="item">
                <img src={react} alt="ReactJS Logo" class="item-logo" />
                <h2 class="item__title">ReactJS</h2>
              </div>
            </div>
          </div>
          <div class="skills__container">
            <h2 class="skills__title">Back End Technologies</h2>
            <div class="items__container">
              <div class="item">
                <img src={nodejs} alt="NodeJS Logo" class="item-logo" />
                <h2 class="item__title">NodeJS</h2>
              </div>
              <div class="item">
                <img src={expressjs} alt="ExpressJS Logo" class="item-logo" />
                <h2 class="item__title">ExpressJS</h2>
              </div>
              <div class="item">
                <img src={mongodb} alt="MongoDB Logo" class="item-logo" />
                <h2 class="item__title">MongoDB</h2>
              </div>
              <div class="item">
                <img src={mysql} alt="MySQL Logo" class="item-logo" />
                <h2 class="item__title">MySQL</h2>
              </div>
              <div class="item">
                <img src={flask} alt="MySQL Logo" class="item-logo" />
                <h2 class="item__title">Flask</h2>
              </div>
            </div>
          </div>
          <div class="skills__container">
            <h2 class="skills__title">Tools</h2>
            <div class="items__container">
              <div class="item">
                <img src={git} alt="Git Logo" class="item-logo" />
                <h2 class="item__title">Git</h2>
              </div>
              <div class="item">
                <img src={wordpress} alt="Wordpress Logo" class="item-logo" />
                <h2 class="item__title">Wordpress</h2>
              </div>
            </div>
          </div>
          <div class="skills__container">
            <h2 class="skills__title">Cloud Technology</h2>
            <div class="items__container">
              <div class="item">
                <img src={aws} alt="AWS Logo" class="item-logo" />
                <h2 class="item__title">AWS</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
