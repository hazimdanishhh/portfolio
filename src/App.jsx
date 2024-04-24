import React, { useState } from "react";
import Nav from "./components/Nav";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

export default function App() {
  const [load, setLoad] = useState(false);

  function refreshPage(load) {
    setTimeout((prev) => {
      setLoad(!prev);
    }, 4800);
  }

  return (
    <>
      {load ? (
        <motion.div
          className="container main"
          id="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="container content">
            <div className="center">
              <Nav />

              <Content />
            </div>
          </div>

          <Footer />
        </motion.div>
      ) : (
        <motion.div
          onLoad={refreshPage(load)}
          className="welcome-container"
          initial={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 4 }}
          animate={{ opacity: 0 }}
        >
          <Typewriter
            options={{
              strings: ["Hi there,", "I'm Danish."],
              autoStart: true,
              deleteSpeed: 30,
              delay: 50,
              pauseFor: 1000,
            }}
          />
        </motion.div>
      )}
    </>
  );
}
