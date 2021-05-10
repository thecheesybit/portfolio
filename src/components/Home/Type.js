import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "AWS Cloud Practioner",
          "Full stack Developer",
          "Mean Stack Developer",
          "Open Source Contributor",
          "Native App Developer",
          "Programmer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
