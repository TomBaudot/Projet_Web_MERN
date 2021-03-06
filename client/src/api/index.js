import axios from 'axios';

const url = 'http://localhost:5000/movies';

export const fetchMovies = () => axios.get(url);
export const createMovie = (newMovie) => axios.post(url, newMovie);
export const deleteMovie = (id) => axios.delete(`${url}/${id}`);
export const likeMovie = (id) => axios.patch(`${url}/${id}/likeMovie`);
export const dislikeMovie = (id) => axios.patch(`${url}/${id}/dislikeMovie`);