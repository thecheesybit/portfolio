import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  //const [sem, upadateSem] = useState(0);
  //const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        //upadteCgpa(res.data.message[2].cgpa);
        //upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Founder of thechessybit.in"
              date="June 2018 - August 2020"
              content={[
                "thecheesybit.in is student chapter developed by native devlopers and students around the country. It was started as an intiative to of learning day to day free lancing tools and skills to be able to show case the talent and even provided free servers for competative gaming and I kind of manged all the core dvelopment task and assembled the data from various social media platforms using Twitter, Reddit.Interpreted the collected text using word-clouds and various other factors that affect the change of sentiments of youth.",
                " Utilized the data to find the issues using Topic Modelling and Building models using LSTM, BERT to predict the sentiments of the youth.",
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Senior Student Coordinator [Pantheon-2017/18 Technical Fest of JPS Lucknow]"
              content={[
                "Corrdinated the whole Event and personally conducted 5 major event including participating in TCS IT Quiz 2017 RANK 3 LKUCKNOW",
              ]}
            />
            <Resumecontent
              title="Web Developer [ITWIZFARM-2016/17/18 Technical Fest of JPS Lucknow]"
              content={[
                "Operated on developing the frontend end of the website using Bootstrap, Javascript and backend APIs using Node.js",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="CSE with AI & ML [VIT, Chennai] "
              date="2019 - 2023"
              content={[`CGPA: 8.01`]}
            />
            <Resumecontent
              title="12TH BOARD [Jagran Public School, Lucknow]"
              date="2017 - 2018"
              content={["Precentage: 80%"]}
            />
            <Resumecontent
              title="10TH BOARD [Jagran Public School, Lucknow] "
              date="2015 - 2016"
              content={["CGPA: 9.6"]}
            />
            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                `Current rank in Spoj ${spojRank}`,
                `Current rank in HackerRank  ${hackerrank}`,
                "Top Performer in Code-Break 1.0",
                "Participant in Hack-A-Bit 2019",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
