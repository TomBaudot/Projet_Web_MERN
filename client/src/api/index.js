import axios from 'axios';

const API = axios.create({baseURL: 'http://localhost:5000'});

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }

    return req;
});


export const fetchMovies = () => API.get('/movies');
export const createMovie = (newMovie) => API.post('/movies/add', newMovie);
export const deleteMovie = (id) => API.delete(`/movies/${id}`);
export const likeMovie = (id) => API.patch(`/movies/${id}/likeMovie`);
export const dislikeMovie = (id) => API.patch(`/movies/${id}/dislikeMovie`);
export const updateMovie = (id, updatedMovie) => API.patch(`/movies/${id}/updateMovie`, updatedMovie);

export const fetchShows = () => API.get('/shows');
export const createShow = (newShow) => API.post('/shows/add', newShow);
export const deleteShow = (id) => API.delete(`/shows/${id}`);
export const likeShow = (id) => API.patch(`/shows/${id}/likeShow`);
export const dislikeShow = (id) => API.patch(`/shows/${id}/dislikeShow`);
export const updateShow = (id, updatedShow) => API.patch(`/shows/${id}/updateShow`, updatedShow);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);

