import React from "react";
import CardHeading from "./CardHeading";
import skills from "../skills";
import SkillsList from "./SkillsList";

function createSkills(skill, i) {
  return <SkillsList key={i} skills={skill} />;
}

export default function Skills() {
  return (
    <>
      <CardHeading experience="skills" />
      <div className="content-container right right-bottom">
        <div className="content-container right right-bottom-right skills-section">
          <ul className="skills-container">{skills.map(createSkills)}</ul>
        </div>
      </div>
    </>
  );
}
