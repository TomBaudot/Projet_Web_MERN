import { FETCH_ALL, CREATE, DELETE, LIKE, DISLIKE } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getMovies = () => async (dispatch) => {
    try {
        const {data} = await api.fetchMovies();
        const action = {type: FETCH_ALL, payload : data};
        dispatch(action);
    } catch(err) {
        console.log(err);
    }
};

export const createMovie = (movie) => async (dispatch) => {
    try {
        const { data } = await api.createMovie(movie);

        dispatch({ type: CREATE, payload: data });
    } catch (err) {
        console.log(err);
    }
};

export const deleteMovie = (id) => async (dispatch) => {
    try {
        await api.deleteMovie(id);
        dispatch({ type: DELETE,payload: id});
    } catch (err){
        console.log(err);
    }
};

export const likeMovie = (id) => async (dispatch) => {
    try {
        const { data } = await api.likeMovie(id);

        dispatch({ type: LIKE, payload: data });
    } catch (err) {
        console.log(err);
    }
};

export const dislikeMovie = (id) => async (dispatch) => {
    try {
        const { data } = await api.dislikeMovie(id);

        dispatch({ type: DISLIKE, payload: data });
    } catch (err) {
        console.log(err);
    }
};

export const updateMovie = (id, post) => async (dispatch) => {
    try {
        const {data } = await api.updateMovie(id, post);

        dispatch({type: 'UPDATE', payload:data});
    } catch (error) {
        console.log(error);
    }
}