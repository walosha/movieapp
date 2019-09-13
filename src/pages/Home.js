import React from "react";

import { ContainerStyles } from "../component/ContainerGrid.styles";
import Movie from "../component/Movie";
import Header from "../component/Header";
import SideBar from "../component/SideBar";
import { Footer } from "../component/Footer";

export default function Home(props) {
  console.log(props);
  return (
    <ContainerStyles>
      <Header />
      <SideBar {...props} />
      <Movie></Movie>
      <Footer />
    </ContainerStyles>
  );
}
