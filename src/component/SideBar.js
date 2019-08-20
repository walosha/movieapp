import React from "react";
import { connect } from "react-redux";
import { fetchGenres } from "../actions";

import { SideBarContainer } from "./SideBar.styles";
import {
  CreatorImage,
  GenreItem,
  CreatorBox,
  GenreBox
} from "./SideBar.styles";

class SideBar extends React.Component {
  componentDidMount() {
    this.props.fetchGenres();
  }

  RenderList() {
    const genres = this.props.state.genres;
    if (genres) {
      return genres.map(genre => {
        return <GenreItem key={genre.id}>{genre.name}</GenreItem>;
      });
    }

    return <GenreItem>LOADING</GenreItem>;
  }
  render() {
    return (
      <SideBarContainer>
        <CreatorBox>
          <CreatorImage />
        </CreatorBox>
        <GenreBox>{this.RenderList()}</GenreBox>
      </SideBarContainer>
    );
  }
}

const mapStatetoProps = state => {
  return { state };
};

export default connect(
  mapStatetoProps,
  { fetchGenres }
)(SideBar);
