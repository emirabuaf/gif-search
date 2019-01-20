import axios from 'axios';

export const REQUEST_GIFS = 'REQUEST_GIFS';
export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

const API_URL = 'http://api.giphy.com/v1/gifs/search?q=';
const API_KEY = '&api_key=1crAtkyf4etLc0sxzZT10EgAYW12LlbS';

export function requestGifs(term=null) {
const response = axios.get(`${API_URL}${term}${API_KEY}`);
  return {
    type: REQUEST_GIFS,
    payload: response
  }
}


export function showModal(item){
  return{
    type:SHOW_MODAL,
    payload:item
  }
}

export function hideModal(){
  return{
    type:HIDE_MODAL
  }
}
