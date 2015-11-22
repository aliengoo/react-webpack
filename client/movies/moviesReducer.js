import Immutable from 'immutable';
import {FetchStatus} from '../_common/api/restApi';
import moviesInitialState from './moviesInitialState';
import {ActionTypes} from './moviesActions';

export default function movies(state = moviesInitialState, action) {

  if (action.type === ActionTypes.FIND_MOVIES) {
    switch (action.fetchStatus) {
      case FetchStatus.FETCHING:
        const fetchingState = Immutable.Map({
          err: null,
          fetching: true
        });
        return state.merge(fetchingState);
      case FetchStatus.COMPLETE:
        const completeState = Immutable.Map({
          err: null,
          movies: Immutable.Iterable(action.data),
          fetching: false
        });
        return state.merge(completeState);
      case FetchStatus.FAILED:
        const errorState = Immutable.Map({
          err: action.err,
          fetching: false
        });
        return state.merge(errorState);
    }
  }

  return state;
}
