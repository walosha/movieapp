import React from "react";
import { ContainerStyles } from "../component/ContainerGrid.styles";
import Movie from "../component/Movie";
import SideBar from "../component/SideBar";

export default function Home(props) {
  return (
    <ContainerStyles>
      <SideBar {...props} />
      <Movie></Movie>
    </ContainerStyles>
  );
}
