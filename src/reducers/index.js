import { combineReducers } from "redux";

const movies = (state = [], action) => {
  switch (action.type) {
    case "FETCH_MOVIES":
      return action.payload;
    default:
      return state;
  }
};

const genres = (state = [], action) => {
  switch (action.type) {
    case "FETCH_GENRES":
      return action.payload;
    default:
      return state;
  }
};

const search = (state = [], action) => {
  switch (action.type) {
    case "FETCH_SEARCH":
      return action.payload;
    default:
      return state;
  }
};

const movieDetails = (state = [], action) => {
  switch (action.type) {
    case "FETCH_MOVIEDETAILS":
      return action.payload;
    default:
      return state;
  }
};

const discoverMovies = (state = [], action) => {
  switch (action.type) {
    case "FETCH_DISCOVER_MOVIES":
      return action.payload;
    default:
      return state;
  }
};

export const reducers = combineReducers({
  movies,
  genres,
  search,
  movieDetails,
  discoverMovies
});
