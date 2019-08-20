import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMovieDetails } from "../actions";

class SingleMovie extends Component {
  componentDidMount() {
    this.props.fetchMovieDetails(this.props.match.params.movie);
  }
  render() {
    const singleMovie = this.props.singleMovie;

    return (
      <div>
        <div className="card">
          <div className="image">
            <img
              alt={singleMovie.original_title}
              src={`https://image.tmdb.org/t/p/w400${singleMovie.poster_path}`}
            />
          </div>
          <div className="content">
            <div className="header">{singleMovie.original_title}</div>

            <div className="description">{singleMovie.overview}</div>
          </div>
          <div className="extra content">
            <span className="right floated">
              Movie Release Date: {singleMovie.release_date}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToprops = state => {
  return { singleMovie: state.movieDetails };
};

export default connect(
  mapStateToprops,
  { fetchMovieDetails }
)(SingleMovie);
