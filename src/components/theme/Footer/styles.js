import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const Details = styled.div`
  h2,
  a,
  span {
    color: #212121;
  }
`;

export const Links = styled.div`
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
