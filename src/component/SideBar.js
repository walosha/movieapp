import React from "react";
import { connect } from "react-redux";
import { fetchGenres } from "../actions";
import { NavLink } from "react-router-dom";
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
        <GenreItem key={genre.id}>
          <NavLink to={`/genres/${genre.id}`}>{genre.name}</NavLink>
        </GenreItem>
      );
    });
  };

  render() {
    console.log(this.props);
    return (
      <SideBarContainer>
        <CreatorBox>
          <CreatorImage />
        </CreatorBox>
        <GenreBox>
          <GenreItemHeading> GENRES</GenreItemHeading>
          {/* {this.renderGenres()} */}
          <GenreItem>music</GenreItem>
          <GenreItem>music</GenreItem>
          <GenreItem>music</GenreItem>
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
