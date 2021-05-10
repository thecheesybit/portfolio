import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
// import BlogCard from "./BlogsCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/django.png";
import emotion from "../../Assets/Projects/fyi.png";
import editor from "../../Assets/Projects/crypt.png";
import chatify from "../../Assets/Projects/flutter.png";
import suicide from "../../Assets/Projects/delta.png";
// import algo from "../../Assets/Projects/algo.png";
// import plant from "../../Assets/Projects/plant.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Flutter Chat App"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with Flutter, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              link="https://github.com/thecheesybit/chat-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Django"
              description="I am trying to make a recursive comment section, using genericForeign keys , now you might wonder why generic well that's just for the sake of practice, I could have just used foreign keys , for more info you can search for importance of genericforeignkeys over foreignkeys"
              link="https://github.com/thecheesybit/django"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Crypt"
              description="Online secure data base App made with Flutter and Firebase that allows user to store data like passwords and links and securely share with other authenticated users "
              link="https://github.com/thecheesybit/crypt"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Delta"
              description="A different kind of app simply made to help me out with day to day chores and supports my well being."
              link="https://github.com/thecheesybit/delta"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="FYI VIT Club's App"
              description="FYI Club of Vit requested me to make a starter APP form them so this simply contains few login and UI design"
              link="https://github.com/thecheesybit/fyi-flutter-app"
            />
          </Col>
        </Row>
        {/* <h1 className="project-heading">
          My Recent <strong className="purple">Blog </strong> Posts
        </h1>
        <p style={{ color: "white" }}>Do give a read to some of my blogs</p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={algo}
              link=""
              title="Cracking Interview"
              site="gitbook.com"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={plant}
              link=""
              title="Plant AI"
              site="medium.com"
            />
          </Col>
        </Row> */}
      </Container>
    </Container>
  );
}

export default Projects;
