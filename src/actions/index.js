import { MovieDb } from "../api/MovieDb";
const apiKey = "89b017430838e765ec1f58f8bce2b786";

const fetchMovies = () => {
  return async dispatch => {
    const response = await MovieDb.get("/3/trending/all/day?", {
      params: {
        api_key: apiKey,
        page: 1
      }
    });

    dispatch({ type: "FETCH_MOVIES", payload: response.data.results });
  };
};

const fetchGenres = () => {
  return async dispatch => {
    const response = await MovieDb.get("/3/genre/movie/list?", {
      params: {
        api_key: apiKey,
        page: 2
      }
    });

    dispatch({ type: "FETCH_GENRES", payload: response.data.genres });
  };
};

const discoverMovies = query => {
  return async dispatch => {
    const response = await MovieDb.get("/3/discover/movie?", {
      params: {
        with_genres: query,
        api_key: apiKey,
        page: 1
      }
    });
    dispatch({
      type: "FETCH_DISCOVER_MOVIES",
      payload: response.data.results
    });
  };
};

const fetchSearch = query => {
  return async dispatch => {
    const response = await MovieDb.get("/3/search/movie?", {
      params: {
        query: query,
        api_key: apiKey,
        page: 1
      }
    });
    dispatch({ type: "FETCH_SEARCH", payload: response.data.results });
  };
};

const fetchMovieDetails = query => {
  return async dispatch => {
    const response = await MovieDb.get(`/3/movie/${query}?`, {
      params: {
        api_key: apiKey
      }
    });

    dispatch({ type: "FETCH_MOVIEDETAILS", payload: response.data });
  };
};

export {
  fetchMovies,
  fetchGenres,
  fetchSearch,
  fetchMovieDetails,
  discoverMovies
};
