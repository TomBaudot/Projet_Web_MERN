import {FETCH_ALL, CREATE, DELETE, LIKE, DISLIKE, UPDATE} from '../constants/actionTypes';

export default (shows = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case LIKE:
            return shows.map((show) => (show._id === action.payload._id ? action.payload : show));
        case DISLIKE:
            return shows.map((show) => (show._id === action.payload._id ? action.payload : show));
        case CREATE:
            return [...shows, action.payload];
        case DELETE:
            return shows.filter((show) => show._id !== action.payload);
        case UPDATE:
            return shows.map((movie) => movie._id === action.payload._id ? action.payload : movie);
        default:
            return shows;
    }
};