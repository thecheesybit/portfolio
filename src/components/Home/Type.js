import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "AWS Cloud Practioner",
          "Full stack Developer",
          "Native App Developer",
          "Programmer",
          "Now, Course Instructor at Youtube !",
          "Graduation Simplified 👈 Channel"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
