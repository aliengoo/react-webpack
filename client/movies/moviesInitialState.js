import Immutable from 'immutable';

var initialState = Immutable.Map({
  err: null,
  movies: Immutable.fromJS([]),
  fetching: false
});

export default initialState;
