import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Wrapper, SkillsWrapper, Details } from "./style";
import { Button } from "../common/Button";

export const Skills = () => {
  return (
    <Wrapper id="about">
      <SkillsWrapper>
        <Details>
          <h1>More about me</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy.
          </p>
          <Button as={AnchorLink} href="#contact">
            Hire me
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
