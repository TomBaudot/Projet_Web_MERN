import { FETCH_ALL, CREATE, DELETE, LIKE, DISLIKE } from '../constants/actionTypes';

export default (movies = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case LIKE:
            return movies.map((movie) => (movie._id === action.payload._id ? action.payload : movie));
        case DISLIKE:
            return movies.map((movie) => (movie._id === action.payload._id ? action.payload : movie));
        case CREATE:
            return [...movies, action.payload];
        case DELETE:
            return movies.filter((movie) => movie._id !== action.payload);
        default:
            return movies;
    }
};