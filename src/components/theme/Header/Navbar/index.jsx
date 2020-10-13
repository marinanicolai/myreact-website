import React, { useContext } from "react";
import { Link } from "react";
import NavbarLinks from "../NavbarLinks";
import { Wrapper, Links } from "./styles";
import social from "./social.json";

const Navbar = () => {
  return (
    <Wrapper>
      <div as={Link} to="/">
        Marina Nicolai{" "}
        <Links>
          {social.map(({ id, name, link, icon }) => (
            <a
              key={id}
              href={link}
              target="_blank"
              rel="noopener"
              rel="noopener noreferrer"
              aria-label={`follow me on ${name}`}
            >
              <img width="24" src={icon} alt={name} />
            </a>
          ))}
        </Links>
      </div>
      <NavbarLinks desktop />
    </Wrapper>
  );
};

export default Navbar;
