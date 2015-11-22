"use strict";

import {combineReducers} from 'redux';
import home from './home/homeReducer';
import movies from './movies/moviesReducer';

export default combineReducers({
  home,
  movies
});