import React from "react";
import { Flex, Details, Links } from "./styles";
import social from "./social.json";

function Footer() {
  return (
    <Flex>
      <Details>
        <span>
          © All rights are reserved | {new Date().getFullYear()} | Made with{" "}
          <span aria-label="love" role="img">
            💖
          </span>{" "}
          by Marina Nicolai
        </span>
      </Details>
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
    </Flex>
  );
}

export default Footer;
