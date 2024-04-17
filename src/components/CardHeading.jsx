import React from "react";

export default function CardHeading(props) {
  return (
    <h2 className="experience" id={props.experience}>
      {props.experience.charAt(0).toUpperCase() + props.experience.slice(1)}
    </h2>
  );
}
