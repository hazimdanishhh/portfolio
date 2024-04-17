import React from "react";
import CardList from "./CardList";
import CardHeading from "./CardHeading";
import cardDetails from "../cardDetails";

function createList(listItem, i) {
  return <CardList key={i} list={listItem} />;
}

export default function Card(props) {
  return (
    <>
      {props.experience ? <CardHeading experience={props.experience} /> : null}

      <div className="content-container right right-bottom">
        <div className="content-container right right-bottom-left">
          <p className="timeline">{props.timeline}</p>
        </div>
        <div className="content-container right right-bottom-right">
          <h3 className="company contrast">{props.title}</h3>
          <h4 className="company">{props.company}</h4>

          <ul className="list">{cardDetails[props.id].list.map(createList)}</ul>
        </div>
      </div>
    </>
  );
}
