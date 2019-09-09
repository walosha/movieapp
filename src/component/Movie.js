import React from "react";
import Ratings from "react-star-ratings";
import { connect } from "react-redux";
import { fetchMovies } from "../actions";
import Error404 from "../images/error404.jpeg";
import Loader from "./Loader";

import {
  MovieContentStyles,
  WrappedMovieCardLink,
  MovieImage,
  MovieDetail,
  MovieTitle,
  MovieAdult
} from "./Movie.styles";

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sortedMovies: [] };
  }
  componentDidMount() {
    this.props.fetchMovies();
  }

  componentDidUpdate(prevoiusProps) {
    if (prevoiusProps.movies.movies !== this.props.movies.movies) {
      this.setState({ sortedMovies: this.props.movies.movies });
    }
    if (prevoiusProps.movies.search !== this.props.movies.search) {
      this.setState({ sortedMovies: this.props.movies.search });
    }
  }

  renderList() {
    if (this.props) {
      return this.state.sortedMovies.map(movie => {
        const { id, title, poster_path, adult, vote_average } = movie;
        return (
          <WrappedMovieCardLink key={id} to={"/:400"}>
            <MovieImage
              alt={title}
              image={
                poster_path === null
                  ? Error404
                  : ` https://image.tmdb.org/t/p/w500${poster_path}`
              }
            />
            <MovieDetail>
              <MovieTitle>{title}</MovieTitle>
              <MovieAdult>{adult ? "Adult Movie" : "Family Movie"}</MovieAdult>
              <Ratings
                rating={Math.ceil(vote_average / 2) || 0}
                starRatedcolor="red"
                numberOfStars={5}
                starDimension="2rem"
                name="rating"
              />
            </MovieDetail>
          </WrappedMovieCardLink>
        );
      });
    } else {
      return <Loader></Loader>;
    }
  }

  render() {
    return <MovieContentStyles>{this.renderList()}</MovieContentStyles>;
  }
}

const mapStateToProps = state => {
  return { movies: state };
};

export default connect(
  mapStateToProps,
  { fetchMovies }
)(Movie);
