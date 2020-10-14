import React from "react";
import { Container } from "../common/Container";
import { Wrapper, IntroWrapper, Details } from "./style";

export const Intro = () => {
  return (
    <Wrapper>
      <IntroWrapper as={Container}>
        <Details>
          <h1>Hi I’m Marina!</h1>
          <div> and I’m a React developer!</div>
        </Details>
      </IntroWrapper>
    </Wrapper>
  );
};
