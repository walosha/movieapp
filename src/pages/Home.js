import React from "react";

import { ContainerStyles } from "../component/ContainerGrid.styles";
import Movie from "../component/Movie";
import Header from "../component/Header";
import SideBar from "../component/SideBar";
import { Footer } from "../component/Footer";

export const Home = () => {
  return (
    <ContainerStyles>
      <Header />
      <SideBar />
      <Movie />
      <Footer />
    </ContainerStyles>
  );
};
