import React from "react";
import Typewriter from "typewriter-effect";

export default function Title() {
  return (
    <>
      <Typewriter
        options={{
          strings: ["Software Engineer", "Web Developer", "Entrepreneur"],
          autoStart: true,
          loop: true,
        }}
      />
    </>
  );
}
