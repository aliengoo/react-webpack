import keyMirror from 'keymirror';
import {invokeAsync} from '../_common/api/restApi';

const ActionTypes = keyMirror({
  FIND_MOVIES: null
});

export {
  ActionTypes
};

export function findMoviesByTitle(title) {
  return invokeAsync("POST", "/api/movies", null, {
    find:{
      "DVD_Title": title
    }
  }, ActionTypes.FIND_MOVIES, "movies");
}

export function findMovies(find) {
  return invokeAsync("POST", "/api/movies", null, {
    find
  }, ActionTypes.FIND_MOVIES, "movies");
}
