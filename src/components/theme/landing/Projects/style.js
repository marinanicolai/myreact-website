import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 2rem 0;
  h2 {
    text-align: center;
    padding-bottom: 1rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 8fr;
  gap: 1.2rem 1.2rem;
`;

export const Item = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);
`;

export const Content = styled.div`
  padding: 1rem 0;
`;
