import React from "react";
import { connect } from "react-redux";
import { fetchGenres } from "../actions";

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

  RenderList = () => {
    return this.props.state.genres.map(genre => {
      return <GenreItem key={genre.id}>{genre.name}</GenreItem>;
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
          {this.RenderList()}
        </GenreBox>
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
