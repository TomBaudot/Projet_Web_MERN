import { FETCH_ALL, CREATE, DELETE, LIKE, DISLIKE } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getShows = () => async (dispatch) => {
    try {
        const {data} = await api.fetchShows();
        const action = {type: FETCH_ALL, payload : data};
        dispatch(action);
    } catch(err) {
        console.log(err);
    }
};

export const createShow = (show) => async (dispatch) => {
    try {
        const { data } = await api.createShow(show);

        dispatch({ type: CREATE, payload: data });
    } catch (err) {
        console.log(err);
    }
};

export const deleteShow = (id) => async (dispatch) => {
    try {
        await api.deleteShow(id);
        dispatch({ type: DELETE,payload: id});
    } catch (err){
        console.log(err);
    }
};

export const likeShow = (id) => async (dispatch) => {
    try {
        const { data } = await api.likeShow(id);

        dispatch({ type: LIKE, payload: data });
    } catch (err) {
        console.log(err);
    }
};

export const dislikeShow = (id) => async (dispatch) => {
    try {
        const { data } = await api.dislikeShow(id);

        dispatch({ type: DISLIKE, payload: data });
    } catch (err) {
        console.log(err);
    }
};

export const updateShow = (id, post) => async (dispatch) => {
    try {
        const {data } = await api.updateShow(id, post);

        dispatch({type: 'UPDATE', payload:data});
    } catch (error) {
        console.log(error);
    }
};