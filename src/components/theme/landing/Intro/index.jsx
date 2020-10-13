import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Button } from "../common/Button";
import { Container } from "../common/Container";
import { Wrapper, IntroWrapper, Details } from "./style";

export const Intro = () => {
  return (
    <Wrapper>
      <IntroWrapper as={Container}>
        <Details>
          <h1>Hi I’m Marina!</h1>
          <div> and I’m a React developer!</div>
          <Button as={AnchorLink} href="#contact">
            Hire me
          </Button>
        </Details>
      </IntroWrapper>
    </Wrapper>
  );
};
