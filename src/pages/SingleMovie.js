import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMovieDetails } from "../actions";

class SingleMovie extends Component {
  componentDidMount() {
    this.props.fetchMovieDetails(this.props.match.params.movie);
  }
  render() {
    return <h1>SingleMovie</h1>;
  }
}

const mapStateToprops = state => {
  return { singleMovie: state.movieDetails };
};

export default connect(
  mapStateToprops,
  { fetchMovieDetails }
)(SingleMovie);
