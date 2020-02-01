import React from "react";
import ReactSidebar from "react-sidebar";
import { connect } from "react-redux";
import { fetchGenres, discoverMovies } from "../actions";
// import { NavLink } from "react-router-dom";

import { SideBarContainer } from "./SideBar.styles";
import {
  CreatorImage,
  GenreItemHeading,
  GenreItem,
  CreatorBox,
  GenreBox
} from "./SideBar.styles";

class SideBar extends React.Component {
  componentDidMount() {
    this.props.fetchGenres();
  }

  renderGenres = () => {
    return this.props.state.genres.map(genre => {
      return (
        <GenreItem
          onClick={() => this.fetchGenresCollection(genre.id)}
          key={genre.id}
        >
          <div>{genre.name}</div>
        </GenreItem>
      );
    });
  };

  fetchGenresCollection = id => {
    this.props.discoverMovies(id);
  };

  render() {
    console.log("SideBar", this.props);
    return (
      <ReactSidebar
        overlayId="overlayId"
        sidebar={
          <SideBarContainer>
            <CreatorBox>
              <CreatorImage />
            </CreatorBox>
            <GenreBox>
              <GenreItemHeading> GENRES</GenreItemHeading>
              {this.renderGenres()}
            </GenreBox>
          </SideBarContainer>
        }
        open={this.props.sidebarOpen}
        docked={this.props.sidebarDocked}
        onSetOpen={this.props.setSidebarOpen}
      >
        {this.props.children}
      </ReactSidebar>
    );
  }
}

const mapStatetoProps = state => {
  return { state };
};

export default connect(mapStatetoProps, { fetchGenres, discoverMovies })(
  SideBar
);
