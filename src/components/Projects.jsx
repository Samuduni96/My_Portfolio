import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/blog.jpeg";
import projImg2 from "../assets/img/releasenote.png";
import projImg3 from "../assets/img/event.jpeg";
import projImg4 from "../assets/img/topads.jpeg";
import projImg5 from "../assets/img/morning.jpeg";
import projImg6 from "../assets/img/book.jpeg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Blogging Platform",
      description: "Design & Development",
      imgUrl: projImg1,
      url: "https://github.com/Samuduni96/my-blog-new-frontend",
    },
    {
      title: "Release Note Management System",
      description: "Design & Development",
      imgUrl: projImg2,
      url: "https://github.com/Samuduni96/ReleaseNotes-Management-System",
    },
    {
      title: "Event Handling System",
      description: "Development (Backend)",
      imgUrl: projImg3,
      url: "",
    },
    {
      title: "TopAds",
      description: "Development and Maintenance",
      imgUrl: projImg4,
      url: "https://topads.lk/",
    },
    {
      title: "The Morning",
      description: "Maintenance",
      imgUrl: projImg5,
      url: "https://www.themorning.lk/",
    },
    {
      title: "Book Management System",
      description: "Design & Development",
      imgUrl: projImg6,
      url: "https://github.com/Samuduni96/BookNook-frontend",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Embark on a journey through my portfolio of projects, where
                    I bring innovative ideas to life through code. As a
                    dedicated software developer, each project is a testament to
                    my passion for creating practical and efficient solutions.
                    From web applications to software solutions, my work
                    reflects a commitment to excellence, user-centric design,
                    and a constant pursuit of enhancing my skills. Explore the
                    diverse range of projects below, each telling a unique story
                    of problem-solving and creativity.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
