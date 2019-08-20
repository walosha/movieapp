import styled from "styled-components";
import { Link } from "react-router-dom";

export const MovieContentStyles = styled.main`
  grid-column: 2/-1;
  grid-row: 2/3;
  grid-column-gap: 3rem;
  grid-row-gap: 4rem;
  display: grid;
  padding: 4rem 4rem;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
`;

export const WrappedMovieCardLink = styled(Link)`
  text-decoration: none;
  height: 50rem;
  width: 80%;
  border-radius: 3px;
  box-shadow: 0 1px 1px 0 #000;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 75% 25%;
  transition: all 1s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const MovieImage = styled.img.attrs(props => ({
  src: props.image
}))`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  grid-row: 1/2;
  grid-column: 1/-1;
`;

export const MovieDetail = styled.div`
  grid-row: 2/3;
  grid-column: 1/-1;
  font-size: 1.1rem;
  display: grid;
  justify-content: center;

  &:hover {
    background-color: whitesmoke;
    color: red;
  }
`;

export const MovieTitle = styled.h2`
  font-size: 2.2rem;
  grid-column: 1/-1;
  grid-row: 1/2;
  text-decoration: none;
`;

export const MovieAdult = styled.h2`
  font-size: 1.1rem;
  grid-column: 1/-1;
  grid-row: 2/3;
  text-decoration: none;
`;
