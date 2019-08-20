import axios from "axios";

const proxy = "https://cors-anywhere.herokuapp.com/";

export const MovieDb = axios.create({
  baseURL: `${proxy}https://api.themoviedb.org`
});
