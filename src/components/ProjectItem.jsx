import React, { useState } from "react";
import Close from "../assets/close.svg";

const ProjectItem = ({ image, title, details, link }) => {
  const [modal, setModal] = useState(false);

  const toogleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="projects__item">
      <img src={image} alt="project image" className="projects__img" />
      {/* <img
                    src={project.image}
                    alt={project.title}
                    className="projects__img"
                  /> */}

      <div className="projects__hover" onClick={toogleModal}>
        <h3 className="projects__title">{title}</h3>
      </div>

      {modal && (
        <div className="projects__modal">
          <div className="projects__modal-content">
            <img
              src={Close}
              alt="close SVG"
              className="modal__close"
              onClick={toogleModal}
            />

            <a href={link} target="_blank">
              <h3 className="modal__title">{title}</h3>

              <ul className="modal__list grid">
                {details.map(({ icon, title, desc }, index) => {
                  return (
                    <li className="modal__item" key={index}>
                      <span className="item__icon">{icon}</span>

                      <div>
                        <span className="item__title">{title}</span>
                        <span className="item__details">{desc}</span>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <img
                src={image}
                alt="modal-project-image"
                className="modal__img"
              />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectItem;
