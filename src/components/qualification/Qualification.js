import React from "react";
import "./qualification.css";
import { SlGraduation } from "react-icons/sl";
// import { BsBriefcase } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";

const Qualification = () => {
  return (
    <section className="qualification">
      <h5>My personal journey</h5>
      <h2 className="text-light">Qualification</h2>
      <div className="container qualification__container">
        <div className="qualification__education">
          <div className="qualfiication__work__heading">
            <SlGraduation className="qualification__details-icon"></SlGraduation>
            <h3>EDUCATION</h3>
          </div>
          <div className="qualification__content">
            <div className="qualification__data">
              <div>
                <h4 className="qualification__title">
                  M.Eng Computer Engineering
                </h4>
                <small> University of Calgary</small>
                <div className="qualification__calender">
                  <FaRegCalendarAlt></FaRegCalendarAlt>
                  2022 - 2014
                </div>
              </div>
              <div className="qualification__rounder">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div className="qualification__rounder">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h4 className="qualification__title">
                  B.TECH ELECTRONICS AND COMMUNICATIONS
                </h4>
                <small> Vellore Institute of Technology</small>
                <div className="qualification__calender"></div>
                <FaRegCalendarAlt></FaRegCalendarAlt>
                2014 - 2018
              </div>
            </div>
          </div>
        </div>
        {/* <div className="qualification__work">
          <div className="qualfiication__work__heading">
            <BsBriefcase className="qualification__details-icon"></BsBriefcase>
            <h3>WORK</h3>
          </div>
          <div className="qualification__content">
            <div className="qualification__data">
              <div>
                <h4 className="qualification__title">
                  M.Eng Computer Engineering
                </h4>
                <small> University of Calgary</small>
                <div className="qualification__calender"></div>
                <FaRegCalendarAlt></FaRegCalendarAlt>
                2022 - 2014
              </div>
              <div className="qualification__rounder">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div className="qualification__rounder">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h4 className="qualification__title">
                  M.Eng Computer Engineering
                </h4>
                <small> University of Calgary</small>
                <div className="qualification__calender">
                  <FaRegCalendarAlt></FaRegCalendarAlt>
                  2022 - 2014
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Qualification;
