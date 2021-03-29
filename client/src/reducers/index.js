import { combineReducers } from 'redux';

import movies from './movies';
import authReducer from './auth';

import { routerReducer } from "react-router-redux";

const allReducers = combineReducers({
  movies,
  routing: routerReducer,
  authReducer
});

export default allReducers;

//export const reducers = combineReducers({ movies });
