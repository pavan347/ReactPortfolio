import React from 'react'
import { skills } from '../data'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import java from "../assets/skills/java.png"
import javascript from "../assets/skills/javascript.png"
import python from "../assets/skills/python.png"
import html from "../assets/skills/html.png"
import css from "../assets/skills/css.png"
import git from "../assets/skills/git.png"
import react from "../assets/skills/reactjs.png"
import nodejs from "../assets/skills/nodejs.png"
import expressjs from "../assets/skills/expressjs.png"
import mongodb from "../assets/skills/mongodb.png"
import mysql from "../assets/skills/mysql.png"
import azure from "../assets/skills/azure.png"

const Skills = () => {
  return (
  <></>
    // <>
    //     {/* {
    //         skills.map(({title, percentage}, index)=>{
    //             return (
    //                 <div className="progress__bar" key={index}>
    //                     <div className="progress__circle">
    //                         <CircularProgressbar strokeWidth={7.5} text={`${percentage}%`} value={percentage}/>
    //                     </div>

    //                     <h3 className="skills__title">{title}</h3>
    //                 </div>
    //             )
    //         })
    //     } */}

    // <div class="skills__container">
    //     <h2 class="skills__title">Programming Languages</h2>
    //     <div class="items__container">
    //         {/* <div class="item">
    //             <img src="" alt="C Logo" class="item-logo"/>
    //             <h2 class="item__title">C</h2>
    //         </div>
    //         <div class="item">
    //             <img src="assets/images/cpp.png" alt="C++ Logo" class="item-logo"/>
    //             <h2 class="item__title">C++</h2>
    //         </div> */}
    //         <div class="item">
    //             <img src={java} alt="Java Logo" class="item-logo"/>
    //             <h2 class="item__title">Java</h2>
    //         </div>
    //         <div class="item">
    //             <img src={javascript} alt="JavaScript Logo" class="item-logo"/>
    //             <h2 class="item__title">JavaScript</h2>
    //         </div>
    //         <div class="item">
    //             <img src={python} alt="Python Logo" class="item-logo"/>
    //             <h2 class="item__title">Python</h2>
    //         </div>
    //     </div>
    // </div>
    // <div class="skills__container">
    //     <h2 class="skills__title">Front End Technologies</h2>
    //     <div class="items__container">
    //         <div class="item">
    //             <img src={html} alt="HTML Logo" class="item-logo"/>
    //             <h2 class="item__title">HTML</h2>
    //         </div>
    //         <div class="item">
    //             <img src={css} alt="CSS Logo" class="item-logo"/>
    //             <h2 class="item__title">CSS</h2>
    //         </div>
    //         {/* <div class="item">
    //             <img src="assets/images/sass.png" alt="SASS Logo" class="item-logo"/>
    //             <h2 class="item__title">SASS</h2>
    //         </div> */}
    //         <div class="item">
    //             <img src={react} alt="ReactJS Logo" class="item-logo"/>
    //             <h2 class="item__title">ReactJS</h2>
    //         </div>
    //     </div>
    // </div>
    // <div class="skills__container">
    //     <h2 class="skills__title">Back End Technologies</h2>
    //     <div class="items__container">
    //         <div class="item">
    //             <img src={nodejs} alt="NodeJS Logo" class="item-logo"/>
    //             <h2 class="item__title">NodeJS</h2>
    //         </div>
    //         <div class="item">
    //             <img src={expressjs} alt="ExpressJS Logo" class="item-logo"/>
    //             <h2 class="item__title">ExpressJS</h2>
    //         </div>
    //         <div class="item">
    //             <img src={mongodb} alt="MongoDB Logo" class="item-logo"/>
    //             <h2 class="item__title">MongoDB</h2>
    //         </div>
    //         <div class="item">
    //             <img src={mysql} alt="MySQL Logo" class="item-logo"/>
    //             <h2 class="item__title">MySQL</h2>
    //         </div>
    //     </div>
    // </div>
    // <div class="skills__container">
    //     <h2 class="skills__title">Tools</h2>
    //     <div class="items__container">
    //         <div class="item">
    //             <img src={git} alt="Git Logo" class="item-logo"/>
    //             <h2 class="item__title">Git</h2>
    //         </div>
    //         <div class="item">
    //             <img src={git} alt="Wordpress Logo" class="item-logo"/>
    //             <h2 class="item__title">Wordpress</h2>
    //         </div>
    //         {/* <div class="item">
    //             <img src="assets/images/linux.png" alt="Linux Logo" class="item-logo"/>
    //             <h2 class="item__title">Linux</h2>
    //         </div>
    //         <div class="item">
    //             <img src="assets/images/kali.png" alt="Kali Logo" class="item-logo"/>
    //             <h2 class="item__title">Kali</h2>
    //         </div> */}
    //     </div>
    // </div>
    // <div class="skills__container">
    //     <h2 class="skills__title">Cloud Technology</h2>
    //     <div class="items__container">
    //         <div class="item">
    //             <img src={azure} alt="AWS Logo" class="item-logo"/>
    //             <h2 class="item__title">AWS</h2>
    //         </div>
    //         {/* <div class="item">
    //             <img src="assets/images/gcp.png" alt="Google Cloud Platform Logo" class="item-logo"/>
    //             <h2 class="item__title">Google Cloud Platform</h2>
    //         </div> */}
    //     </div>
    // </div>

    // </>
  )
}

export default Skills
