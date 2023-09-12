import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
// import BlogCard from "./BlogsCards";
import Particle from "../Particle";

import dsa from "../../Assets/Projects/dsa.png";
import docker from "../../Assets/Projects/docker.png";
import leaf from "../../Assets/Projects/django.png";
import uno from "../../Assets/Projects/uno.png";
import chess from "../../Assets/Projects/chess.png";
import emotion from "../../Assets/Projects/fyi.png";
import editor from "../../Assets/Projects/crypt.png";
import chatify from "../../Assets/Projects/flutter.png";
import suicide from "../../Assets/Projects/delta.png";
import vc from "../../Assets/Projects/vc.png";
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
              imgPath={dsa}
              isBlog={false}
              title="Data Structures Master Class through C/C++"
              description="The world of coding awaits your mastery on it and with my upcoming master class on Data Structures and Algorithms, presented through the lens of C and C++ you can master it all !"
              link="https://www.youtube.com/watch?v=E95QfMHfYyQ&list=PLBhkiVMxXjP41gsOkZhx7awUscq59fXjL"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={docker}
              isBlog={false}
              title="Docker and Kubernetes master class"
              description="In this course, you'll master Docker, the game-changing containerization platform that's revolutionizing software development. Whether you're a beginner or an experienced developer, our expert instructors will guide you through every aspect of Docker, from the basics to advanced techniques."
              link="https://www.youtube.com/watch?v=RywsCNVCIVw&list=PLBhkiVMxXjP5GjDZ6U76WeqMtVeQ5zbBs"
            />
          </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chess}
              isBlog={false}
              title="Cheesy-chess"
              description="Multiplayer Chess Game built with React and Node.js + Express.
              Users can play their friends anonymously via link.
              Users are also able to chat with each other during the game via camera + microphone.
              Tech stack: React, webRTC, Node.js, Express, Socket.io"
              link="https://github.com/thecheesybit/cheesy-chess"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uno}
              isBlog={false}
              title="cheesy-uno"
              description="UNO is the classic and beloved card game that’s easy to pick up and impossible to put down! Players take turns matching a card in their hand with the current card shown on top of the deck either by color or number. Special action cards deliver game-changing moments as they each perform a function to help you defeat your opponents. These include skips, reverses, draw twos, color-changing wild and draw four wild cards."
              link="https://github.com/thecheesybit/cheesy-uno"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vc}
              isBlog={false}
              title="Cheesy Video Call website"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with React, Material-UI, and Firebase. Have features which allows user for realtime video calling."
              link="https://github.com/thecheesybit/cheesy-videocall"
            />
          </Col>

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
