import React from "react";
import "./About.css";
import ME from "../../assets/my_photo.png";
import { FaAward } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2 className="text-light">About Me</h2>
      <div className="container about__container">
        {/* <div className="about__me">
          <div className="about__me_image">
            <img src={ME} alt="About" />
          </div>
        </div> */}

        <div className="about__content">
          <p>
            I'm a web developer with a focus on the MERN stack, but still
            exploring other technologies and frameworks that catch my interest!
            if you're looking for a developer to add to your team, I'd love to
            hear from you!
          </p>
          <div className="about__cards">
            <article className="about__card">
              <img
                className="growth"
                src={require("../../assets/previouly.png")}
                alt=""
              />
              <h5>Previouly</h5>
              <small>
                I've worked as a web developer for over 3 years, working with an
                Indian telecommunications company
              </small>
            </article>
            <article className="about__card">
              <img
                className="growth_1"
                src={require("../../assets/goal.png")}
                alt=""
              />
              <h5>My Goal</h5>
              <small>
                {" "}
                To reach senior level front-end knowledge and to increase tech
                access through skill sharing and curriculum development
              </small>
            </article>
            <article className="about__card">
              <img
                className="growth_1"
                src={require("../../assets/currently.png")}
                alt=""
              />
              <h5>Currently</h5>
              <small>
                I'm a Computer Software Engineering master's student at
                University of Calgary, Canada. Currently Looking for summer
                internship in the field of Software Engineering, Software
                Development, Front-end Development, and Full Stack Web
                Development
              </small>
            </article>
          </div>
          <a href="#contact" className="btn btn-primary btn-talk">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
