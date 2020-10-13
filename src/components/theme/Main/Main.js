import React from "react";
import { Intro } from "../landing/Intro";
import { Skills } from "../landing/Skills";
import { Timeline } from "../landing/Timeline";
import { Projects } from "../landing/Projects";

function Main() {
  return (
    <>
      <Intro />
      <Projects />
      <Skills />
      <Timeline />
    </>
  );
}

export default Main;
