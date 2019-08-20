import React, { Component } from "react";
import { connect } from "react-redux";
import { MovieCardStyles } from "./MovieCard.styles";

class MovieList extends Component {
  render() {
    return <MovieCardStyles />;
  }
}

const mapStateToProps = state => {
  return { state: state };
};

export default connect(mapStateToProps)(MovieList);
