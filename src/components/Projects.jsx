import React from "react";
import CardHeading from "./CardHeading";
import SkillsList from "./SkillsList";

function createSkills(skill, i) {
  return <SkillsList key={i} skills={skill} />;
}

export default function Projects(props) {
  return (
    <>
      {props.experience ? <CardHeading experience={props.experience} /> : null}

      <div className="content-container right right-bottom">
        <div className="content-container right right-bottom-right">
          <a href={props.link} target="__blank">
            <h3 className="company contrast project">{props.title}</h3>
          </a>
          <p className="company project">{props.desc}</p>
          {/* Add Image onclick to expand view */}
          <img className="project-img" src={props.imgSrc} alt="Project Image" />
          <div className="content-container right right-bottom-right skills-section">
            <ul className="skills-container">
              {props.skills.map(createSkills)}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
