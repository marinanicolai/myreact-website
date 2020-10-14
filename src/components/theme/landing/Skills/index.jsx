import React from "react";
import { Wrapper, SkillsWrapper, Details } from "./style";

export const Skills = () => {
  return (
    <Wrapper id="about">
      <SkillsWrapper>
        <Details>
          <h1>More about me</h1>
          <p>
            I am a front-end developer who is striving to learn the best
            practices of coding while being adaptive to user's needs and
            aspiration. If I am not coding I like spending time with loved ones
            or riding the bike in the city.
          </p>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
