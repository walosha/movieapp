import React from "react";
import { connect } from "react-redux";

import Ratings from "react-star-ratings";

import Error404 from "../images/error404.jpeg";

import { fetchPosts } from "../actions";
import {
  MovieContentStyles,
  WrappedMovieCardLink,
  MovieImage,
  MovieDetail,
  MovieTitle,
  MovieAdult
} from "./Movie.styles";

const Movie = props => {
  const renderList = () => {
    if (props.movies.search) {
      return props.movies.search.map(movie => {
        return (
          <WrappedMovieCardLink key={movie.id} to={"/:400"}>
            <MovieImage
              alt={movie.title}
              image={
                movie.poster_path === null
                  ? Error404
                  : ` https://image.tmdb.org/t/p/w500${movie.poster_path}`
              }
            />
            <MovieDetail>
              <MovieTitle>{movie.title}</MovieTitle>
              <MovieAdult>
                {movie.adult ? "Adult Movie" : "Family Movie"}
              </MovieAdult>
              <Ratings
                rating={Math.ceil(movie.vote_average / 2)}
                starRatedcolor="red"
                numberOfStars={5}
                starDimension="2rem"
                name="rating"
              />
            </MovieDetail>
          </WrappedMovieCardLink>
        );
      });
    }
    return "LOADING....";
  };
  return <MovieContentStyles>{renderList()}</MovieContentStyles>;
};

const mapStateToProps = state => {
  return { movies: state };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(Movie);
