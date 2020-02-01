import React from "react";
import { ContainerStyles } from "../component/ContainerGrid.styles";
import Movie from "../component/Movie";
import SideBar from "../component/SideBar";
import Header from "../component/Header";

const mql = window.matchMedia(`(min-width: 800px)`);
export default class Home extends React.Component {
  state = {
    sidebarDocked: mql.matches,
    sidebarOpen: false
  };

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
  }

  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }

  mediaQueryChanged = () => {
    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
  };
  setSidebarOpen = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  };

  render() {
    return (
      <ContainerStyles>
        <SideBar {...this.state} setSidebarOpen={this.setSidebarOpen}>
          <Header setSidebarOpen={this.setSidebarOpen} {...this.state} />
          <Movie></Movie>
        </SideBar>
      </ContainerStyles>
    );
  }
}
