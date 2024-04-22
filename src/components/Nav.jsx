import React from "react";
import Title from "./Title";
import NavList from "./NavList";
import navList from "../navList";
import { motion } from "framer-motion";

function createNavList(navItem) {
  return <NavList key={navItem.id} href={navItem.href} name={navItem.name} />;
}

export default function Nav() {
  return (
    <div className="content-container left">
      <div className="container-left-top">
        <div className="content-container left-top">
          <a href="#">
            <motion.img
              src="./profile_photo.jpg"
              alt="Hazim Danish photo"
              className="profile-photo"
              initial={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              animate={{ opacity: 1 }}
            />
          </a>
          <a href="#" className="link-index">
            Hazim Danish
          </a>
          <Title />
        </div>

        <nav>
          <ul className="navbar">{navList.map(createNavList)}</ul>
        </nav>
      </div>
    </div>
  );
}
