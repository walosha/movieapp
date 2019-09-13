import styled from "styled-components";
import ProfilePix from "../images/pic.jpg";

export const SideBarContainer = styled.nav`
  color: white;
  grid-column: 1/2;
  grid-row: 2/-1;
  background-color: whitesmoke;
  display: grid;
  grid-row-gap: 5rem;
  grid-template-rows: 10rem max-content 10rem;
  background-color: black;
`;

export const GenreBox = styled.div`
  grid-row: 2/3;
  display: flex;
  flex-direction: column;
`;

export const GenreItemHeading = styled.h4`
  font-size: 1.5rem;
  font-weight: 700;
  align-self: stretch;
  text-align: center;
  padding: 1.5rem 4rem;
  color: black;
  background-color: #fff;
`;

export const GenreItem = styled.li`
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 700;
  display: inline-block;
  align-self: stretch;
  text-align: center;
  border-radius: 3px;
  padding: 1.9rem 5rem;
  transform: scaleX(1);
  transition: all 7s;

  &:hover {
    color: black;
    background-color: #f5f5f5;
    border-bottom: 1px solid white;
    cursor: pointer;
    transform: scaleX(1.1);
    transform-origin: 0%;
  }
`;

export const CreatorBox = styled.div`
  grid-row: 1/2;
  grid-column: 1/-1;
  padding: 4rem 7rem;
`;

export const CreatorImage = styled.img.attrs(props => ({ src: ProfilePix }))`
  height: 7rem;
  width: 7rem;
  border-radius: 50%;
`;

export const MoviedbBox = styled.div`
  grid-row: 4/5;
`;
