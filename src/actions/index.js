import axios from 'axios';

export const REQUEST_GIFS = 'REQUEST_GIFS';

const API_URL = 'http://api.giphy.com/v1/gifs/search?q=';
const API_KEY = '&api_key=1crAtkyf4etLc0sxzZT10EgAYW12LlbS';

export function requestGifs(term) {
const response = axios.get(`${API_URL}${term}${API_KEY}`);
  return {
    type: REQUEST_GIFS,
    payload: response
  }
}
