import keyMirror from 'keymirror';
import {invokeAsync} from '../_common/api/restApi';
import {DVD_Title} from './movieSymbols';


const ActionTypes = keyMirror({
  FIND_MOVIES: null
});

export {
  ActionTypes
};

export function findMovies(find) {
  console.log(find);

  return invokeAsync("POST", "/api/movies", null, {
    find
  }, ActionTypes.FIND_MOVIES, "movies");
}
