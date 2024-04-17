import React from "react";
import Card from "./Card";
import Summary from "./Summary";
import Skills from "./Skills";
import Projects from "./Projects";
import cardDetails from "../cardDetails";
import projectDetails from "../projectDetails";

function createCard(cardDetail) {
  return (
    <Card
      key={cardDetail.id}
      id={cardDetail.id}
      experience={cardDetail.experience}
      timeline={cardDetail.timeline}
      title={cardDetail.title}
      company={cardDetail.company}
    />
  );
}

function createProject(projectDetail) {
  return (
    <Projects
      key={projectDetail.id}
      experience={projectDetail.experience}
      title={projectDetail.title}
      desc={projectDetail.desc}
      imgSrc={projectDetail.imgSrc}
      skills={projectDetail.skills}
      link={projectDetail.link}
    />
  );
}

export default function Content() {
  return (
    <div className="content-container right">
      <Summary />

      {cardDetails.map(createCard)}

      <a className="btn-cv" href="../public/resume.pdf" target="__blank">
        Download CV
      </a>

      <Skills />

      {projectDetails.map(createProject)}
    </div>
  );
}
