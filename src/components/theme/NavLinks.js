import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

function NavLinks() {
  return (
    <>
      <AnchorLink href="#about">About</AnchorLink>
      <AnchorLink href="#projects">Projects</AnchorLink>
      <AnchorLink href="#contact">Contact</AnchorLink>
    </>
  );
}

export default NavLinks;
