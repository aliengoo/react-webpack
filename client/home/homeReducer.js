import {ActionTypes} from './homeActions';

export default function homeReducer(homeState = {}, action) {

  if (action.type === ActionTypes.SAY_HELLO) {
    return homeState.set('message', action.data);
  }

  return homeState;
}
