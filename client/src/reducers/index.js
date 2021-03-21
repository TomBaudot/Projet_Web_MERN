import { combineReducers } from 'redux';

import movies from './movies';

import { routerReducer } from "react-router-redux";

const allReducers = combineReducers({
  movies,
  routing: routerReducer
});

export default allReducers;

//export const reducers = combineReducers({ movies });
