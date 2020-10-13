import React from "react";
import { Intro } from "../landing/Intro";
import { Skills } from "../landing/Skills";
import { Tline } from "../landing/Tline";
import { Projects } from "../landing/Projects";

function Main() {
  return (
    <>
      <Intro />
      <Projects />
      <Skills />
      <Tline />
    </>
  );
}

export default Main;
