import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Engenheiro de software ",
          " Freelancer ",
          "Desenvolvedor FullStack",
        ],
        autoStart: true,
        loop: true
      }}
    />
  );
}

export default Type;
