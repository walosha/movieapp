import styled from "styled-components";

export const ContainerStyles = styled.div`
  display: grid;
  grid-template-columns: 22rem 1fr repeat(8, 7rem) 1fr;
  grid-template-rows: 7rem 1fr 2rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr repeat(8, 1fr);
  }
`;
