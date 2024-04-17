import React from "react";

export default function NavList(props) {
  return (
    <>
      <li>
        <a href={props.href} className="navitem">
          &#10148; {props.name}
        </a>
      </li>
    </>
  );
}
