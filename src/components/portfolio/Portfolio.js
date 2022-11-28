import React from "react";
import "./portfolio.css";
import portfolio1 from "../../assets/movie-search-app.jpg";
import portfolio3 from "../../assets/sinimage.jpg";
import portfolio2 from "../../assets/portoliocover.jpg";

const Portfolio = (props) => {
  const { projectInfo } = props;
  console.log(projectInfo);
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {projectInfo.map(({ id, image, github, demo, title }, index) => {
          console.log(image, index);
          const portfolioImage = () => {
            if (index === 0) {
              return <img className="imageHeight" src={portfolio1} alt="/" />;
            } else if (index === 1) {
              return <img src={portfolio2} alt="/" />;
            } else if (index === 2) {
              return <img src={portfolio3} alt="/" />;
            }
          };
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">{portfolioImage()}</div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                {demo !== "" ? (
                  <a
                    href={demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                ) : (
                  <a
                    // style={disabledCursor}
                    href={null}
                    className="btn btn-primary"
                    rel="noreferrer"
                  >
                    In progress
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
