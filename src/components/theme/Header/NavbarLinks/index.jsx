import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Wrapper } from "./style";

function NavLinks() {
  return (
    <Wrapper>
      <AnchorLink href="#about">About</AnchorLink>
      <AnchorLink href="#projects">Projects</AnchorLink>
      <AnchorLink href="#contact">Timeline</AnchorLink>
    </Wrapper>
  );
}

export default NavLinks;
