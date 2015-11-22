import keyMirror from 'keymirror';
import {invokeAsync} from '../_common/api/restApi';
import {DVD_Title} from './movieSymbols';

const ActionTypes = keyMirror({
  FIND_MOVIES: null
});

export {
  ActionTypes
};

export function findMoviesWithTitle(title) {
  return invokeAsync("POST", "/movies", null, {
    find: {
      [DVD_Title]: title
    }
  }, ActionTypes.FIND_MOVIES, "movies");
}

export function findMovies() {
  return invokeAsync("GET", "/movies", null, {
    find: {}
  }, ActionTypes.FIND_MOVIES, "movies");
}
