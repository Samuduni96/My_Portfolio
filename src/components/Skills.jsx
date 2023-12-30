import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import node from "../assets/img/node.svg";
import mongodb from "../assets/img/mongodb-icon.svg";
import express from "../assets/img/expressjs-ar21.svg";
import react from "../assets/img/react.svg";
import colorSharp from "../assets/img/color-sharp.png";
import typescript from "../assets/img/icons8-typescript.svg";
import python from "../assets/img/python.svg";
import java from "../assets/img/java.svg";
import javascript from "../assets/img/js.svg";
import html from "../assets/img/html5.svg";
import css from "../assets/img/css3-alt.svg";
import mysql from "../assets/img/icons8-mysql.svg";
import postgresql from "../assets/img/icons8-postgresql.svg";
import next from "../assets/img/next-js.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                As a dedicated software developer, I transform innovative
                concepts into efficient solutions. Proficient in diverse
                programming languages and frameworks, I approach problem-solving
                dynamically. My expertise spans both front-end and back-end
                development, ensuring seamless user experiences and robust
                system functionality. From crafting responsive interfaces to
                optimizing databases, I deliver top-notch software solutions.
                Explore my skills below—a blend of experience and a passion for
                continuous learning.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={node} alt="Image" />
                  <h5>Node-js</h5>
                </div>
                <div className="item">
                  <img src={mongodb} alt="Image" />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img src={express} alt="Image" />
                  <h5>Express-js</h5>
                </div>
                <div className="item">
                  <img src={react} alt="Image" />
                  <h5>React-js</h5>
                </div>
                <div className="item">
                  <img src={typescript} alt="Image" />
                  <h5>TypeScript</h5>
                </div>
                <div className="item">
                  <img src={python} alt="Image" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={java} alt="Image" />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <img src={javascript} alt="Image" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={html} alt="Image" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={css} alt="Image" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={mysql} alt="Image" />
                  <h5>MySQL</h5>
                </div>
                <div className="item">
                  <img src={postgresql} alt="Image" />
                  <h5>PostgreSQL</h5>
                </div>
                <div className="item">
                  <img src={next} alt="Image" />
                  <h5>Next-js</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
