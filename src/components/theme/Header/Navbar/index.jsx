import React, { useContext } from "react";
import { Link } from "react";
import NavbarLinks from "../NavbarLinks";
import { Wrapper, Brand } from "./styles";

const Navbar = () => {
  return (
    <Wrapper>
      <div as={Link} to="/">
        Marina Nicolai
      </div>
      <NavbarLinks desktop />
    </Wrapper>
  );
};

export default Navbar;
