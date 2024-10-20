import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";
import { FaToolbox } from "react-icons/fa6";


import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

import project1 from "./assets/projects/sims-image.png";
import project2 from "./assets/projects/galactic-grooves.png";
import project3 from "./assets/projects/beautifulhomespaces1.png";
import project4 from "./assets/projects/tictactoe.png";
import project5 from "./assets/projects/currency-convertor.png";
import project6 from "./assets/projects/hawkinnovations.png"

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },
  {
    id: 3,
    name: "Skills",
    icon: <FaToolbox className="nav__icon" />,
    path: "/skills",
  },

  {
    id: 4,
    name: "Projects",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/projects",
  },

  {
    id: 5,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

// export const personalInfo = [
//   {
//     id: 1,
//     title: "First Name : ",
//     description: "Garapati",
//   },

//   {
//     id: 2,
//     title: "Last Name : ",
//     description: "Pavan Kumar",
//   },

//   {
//     id: 3,
//     title: "Age : ",
//     description: "20 Years",
//   },

//   {
//     id: 4,
//     title: "Nationality : ",
//     description: "Indian",
//   },

//   {
//     id: 5,
//     title: "Freelance : ",
//     description: "Available",
//   },

//   {
//     id: 6,
//     title: "Address : ",
//     description: "vijayawada, Andhra Pradesh",
//   },

//   {
//     id: 7,
//     title: "Phone : ",
//     description: "+919876556789",
//   },

//   {
//     id: 8,
//     title: "Email : ",
//     description: "garapatipavankumar04@mail.com",
//   },

//   // {
//   //   id: 9,
//   //   title: 'Skype : ',
//   //   description: 'steve.milner',
//   // },

//   {
//     id: 10,
//     title: "Langages : ",
//     description: "English, Telugu, Hindi",
//   },
// ];

export const stats = [
  // {
  //   id: 1,
  //   no: "12+",
  //   title: "Years of <br /> Experience",
  // },

  {
    id: 2,
    no: "8.70",
    title: "CGPA",
  },

  {
    id: 3,
    no: "16+",
    title: "Completed <br /> Projects",
  },

  {
    id: 4,
    no: "15+",
    title: " Skills <br /> Learned",
  },
];

export const resume = [
  // {
  //   id: 1,
  //   category: 'experience',
  //   icon: <FaBriefcase />,
  //   year: '2018 - PRESENT',
  //   title: 'Web Developer <span> Envato </span>',
  //   desc: 'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,',
  // },

  // {
  //   id: 2,
  //   category: 'experience',
  //   icon: <FaBriefcase />,
  //   year: '2013 - 2018',
  //   title: 'UI/UX Designer <span> Themeforest </span>',
  //   desc: 'Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt',
  // },

  // {
  //   id: 3,
  //   category: 'experience',
  //   icon: <FaBriefcase />,
  //   year: '2005 - 2013',
  //   title: 'Consultant <span> Videohive </span>',
  //   desc: 'Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt',
  // },

  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2021 - Present",
    title: "B.TECH in CSE <span> Amrita Sai Institute of Science & Technology </span>",
    desc: "Pursuing a Bachelor's degree in Computer Science and Engineering, focusing on software development, AI, blockchain, and various final year projects like MediXConnect, Fake Product Detection Using Blockchain, and more.",
  },

  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2019 - 2021",
    title: "Intermediate <span> Narayana Junior College </span>",
    desc: "Completed Intermediate education with a strong focus on Mathematics, Physics, and Chemistry (MPC stream), laying the foundation for engineering studies.",
  },

  {
    id: 6,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2018 - 2019",
    title: "10<sup>th</sup> Standard <span> Narayana High School </span>",
    desc: "Completed 10th grade, securing a solid academic foundation with an emphasis on science and mathematics, and achieving excellent results in the board exams.",
  },
];

export const skills = [
  {
    id: 1,
    title: "Html",
    percentage: "25",
  },

  {
    id: 2,
    title: "Javascript",
    percentage: "89",
  },

  {
    id: 3,
    title: "Css",
    percentage: "70",
  },

  {
    id: 4,
    title: "Php",
    percentage: "66",
  },

  {
    id: 5,
    title: "Wordpress",
    percentage: "95",
  },

  {
    id: 6,
    title: "Jquery",
    percentage: "50",
  },

  {
    id: 7,
    title: "Angular",
    percentage: "65",
  },

  {
    id: 8,
    title: "React",
    percentage: "45",
  },
];

export const projectsData = [
  {
    id: 1,
    type: "Java",
    title: "SIMS(Student Info Management System)",
    description:
      "A Java-based GUI application that allows users to manage student information.",
    image: project1,
    link: "https://sims-preview-347.netlify.app",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "SIMS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "simspreview.com",
      }
    ],
  },
  {
    id: 2,
    type: "Web",
    title: "Galactic Grooves",
    description: "A Music Player application which is dynamic in nature.",
    image: project2,
    link: "https://galactic-grooves.netlify.app/",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Galactic Grooves",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "galacticgrooves.com",
      }
    ],
  },
  {
    id: 3,
    type: "Web",
    title: "Beautiful Home Spaces",
    description: "It is an interior designing website.",
    image: project3,
    link: "https://beautifulhomespaces.com",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Beautiful Home Spaces",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "beautifulhomespaces.com",
      }
    ],
  },
  {
    id: 4,
    type: "Web",
    title: "Tic Tac Toe",
    description: "A cool game developed by using JavaScript.",
    image: project4,
    link: "https://tictactoe-347.netlify.app",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Tic Tac Toe",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "tictactoe.app",
      }
    ],
  },
 
  
  {
    id: 5,
    type: "Web",
    title: "Currency Convertor",
    description:
      "Made using JavaScript and API which is able to convert any type of currency.",
    image: project5,
    link: "https://currency-converter-347.netlify.app",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Currency Convertor",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "currencyconverter.app",
      }
    ],
  }, {
    id: 6,
    type: "Web",
    title: "Hawk Innovations",
    description:
      "This was a website made for drone company.",
    image: project6,
    link: "https://hawkinnovations.in",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Hawk Innovations",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "hawkinnovations.in",
      }
    ],
  }
];

// export const projects = [
//   {
//     id: 1,
//     img: project1,
//     title: "Photo Editing",
//     details: [
//       {
//         icon: <FiFileText />,
//         title: "Project : ",
//         desc: "Photo",
//       },
//       {
//         icon: <FiUser />,
//         title: "Client : ",
//         desc: "Dribble",
//       },
//       {
//         icon: <FaCode />,
//         title: "Language : ",
//         desc: "Adobe Photoshop",
//       },
//       {
//         icon: <FiExternalLink />,
//         title: "Preview : ",
//         desc: "www.dribble.com",
//       },
//     ],
//   },

//   {
//     id: 2,
//     img: project2,
//     title: "Website Design",
//     details: [
//       {
//         icon: <FiFileText />,
//         title: "Project : ",
//         desc: "Website",
//       },
//       {
//         icon: <FiUser />,
//         title: "Client : ",
//         desc: "Dribble",
//       },
//       {
//         icon: <FaCode />,
//         title: "Language : ",
//         desc: "React JS",
//       },
//       {
//         icon: <FiExternalLink />,
//         title: "Preview : ",
//         desc: "www.dribble.com",
//       },
//     ],
//   },

//   {
//     id: 3,
//     img: project3,
//     title: "Video Editing",
//     details: [
//       {
//         icon: <FiFileText />,
//         title: "Project : ",
//         desc: "Video",
//       },
//       {
//         icon: <FiUser />,
//         title: "Client : ",
//         desc: "Dribble",
//       },
//       {
//         icon: <FaCode />,
//         title: "Language : ",
//         desc: "Adobe Premium",
//       },
//       {
//         icon: <FiExternalLink />,
//         title: "Preview : ",
//         desc: "www.dribble.com",
//       },
//     ],
//   },

//   {
//     id: 4,
//     img: project4,
//     title: "Video Editing",
//     details: [
//       {
//         icon: <FiFileText />,
//         title: "Project : ",
//         desc: "Video",
//       },
//       {
//         icon: <FiUser />,
//         title: "Client : ",
//         desc: "Dribble",
//       },
//       {
//         icon: <FaCode />,
//         title: "Language : ",
//         desc: "Adobe Premium",
//       },
//       {
//         icon: <FiExternalLink />,
//         title: "Preview : ",
//         desc: "www.dribble.com",
//       },
//     ],
//   },

//   {
//     id: 5,
//     img: project5,
//     title: "Landing Page",
//     details: [
//       {
//         title: "Project : ",
//         desc: "Website",
//       },
//       {
//         title: "Client : ",
//         desc: "Dribble",
//       },
//       {
//         title: "Language : ",
//         desc: "React JS, Node JS",
//       },
//       {
//         title: "Preview : ",
//         desc: "www.dribble.com",
//       },
//     ],
//   },

//   // {
//   //   id: 6,
//   //   img: project6,
//   //   title: "Photo Editing",
//   //   details: [
//   //     {
//   //       icon: <FiFileText />,
//   //       title: "Project : ",
//   //       desc: "Photo",
//   //     },
//   //     {
//   //       icon: <FiUser />,
//   //       title: "Client : ",
//   //       desc: "Dribble",
//   //     },
//   //     {
//   //       icon: <FaCode />,
//   //       title: "Language : ",
//   //       desc: "Adobe Photoshop",
//   //     },
//   //     {
//   //       icon: <FiExternalLink />,
//   //       title: "Preview : ",
//   //       desc: "www.dibble.com",
//   //     },
//   //   ],
//   // },
// ];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
