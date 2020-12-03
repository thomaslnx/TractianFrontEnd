import axios from 'axios';

const api = axios.create({
  baseURL: 'https://challenge-tractian.herokuapp.com',
});


export default api;
