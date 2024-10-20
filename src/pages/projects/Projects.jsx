import React, { useState } from "react";
import "./projects.css";

import ProjectItem from "../../components/ProjectItem";
import { projectsData } from "../../data";

const projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.type === selectedCategory);

  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">
        My <span>Projects</span>
      </h2>

      <div className="projects__tabs container">
        <div
          className={`projects__button  ${
            selectedCategory === "All" ? "projects__active" : ""
          }`}
          onClick={() => handleCategoryChange("All")}
        >
          All
        </div>
        <div
          className={`projects__button  ${
            selectedCategory === "Web" ? "projects__active" : ""
          }`}
          onClick={() => handleCategoryChange("Web")}
        >
          Web
        </div>
        <div
          className={`projects__button  ${
            selectedCategory === "Java" ? "projects__active" : ""
          }`}
          onClick={() => handleCategoryChange("Java")}
        >
          Java
        </div>
      </div>

      <div className="projects__container container grid">
        {/* {
          projects.map((item) => {
            return <ProjectItem key={item.id} {...item}/>;
          })
        } */}
        {filteredProjects.map((item) => {
          return <ProjectItem key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default projects;
