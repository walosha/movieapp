import React from "react";
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

  fetchGenresCollection = id => {
    this.props.discoverMovies(id);
  };

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

  render() {
    return (
      <SideBarContainer>
        <CreatorBox>
          <CreatorImage />
        </CreatorBox>
        <GenreBox>
          <GenreItemHeading> GENRES</GenreItemHeading>

          {this.renderGenres()}
        </GenreBox>
      </SideBarContainer>
    );
  }
}

const mapStatetoProps = state => {
  return { state };
};

export default connect(mapStatetoProps, { fetchGenres, discoverMovies })(
  SideBar
);
