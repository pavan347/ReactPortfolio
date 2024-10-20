import React from "react";
import "./home.css";
import { FaArrowRight } from "react-icons/fa";

import Me from "../../assets/Me-Lg.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
      <section className="home section grid">
        <img src={Me} alt="my__image" className="home__img" />

        <div className="home__content">
          <div className="home__data">
            <h1 className="home__title">
              <span>I'm Garapati Pavan</span> Full Stack Developer
            </h1>

            <p className="home__description">
              Welcome to my journey as an aspiring Full Stack Developer! Explore
              my portfolio to witness the projects that showcase my dedication
              to creating impactful solutions.
            </p>

            <Link to="/about" className="button">
              More About Me{" "}
              <span className="button__icon">
                <FaArrowRight />
              </span>
            </Link>
          </div>
        </div>

        <div className="color__block"></div>
      </section>
  );
};

export default Home;
