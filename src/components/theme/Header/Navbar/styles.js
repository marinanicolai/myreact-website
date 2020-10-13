import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Links = styled.span`
  display: flex;
  align-items: center;
  a {
    padding: 2rem;
    margin: 0 0.5rem;
    img {
      margin: 0;
    }
    &:first-child,
    &:last-child {
      margin: 0;
    }
  }
`;
