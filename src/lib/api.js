import axios from 'axios';

export function getAPOD(date = '') {
  return axios.get(`https://api.nasa.gov/planetary/apod?api_key=QdEe46eYBxtTcxRyJcz2LfrXssQ76NFEt25ZcTqL&date=${date}`);
}