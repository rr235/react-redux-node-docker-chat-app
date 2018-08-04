import { fromJS } from 'immutable';
import { FETCH_ROOMS, CREATE_ROOM } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case CREATE_ROOM:
      if (action.payload.name) {
        const newState = fromJS(state).push(action.payload);
        return newState.toJS();
      } else {
        return state;
      }
    case FETCH_ROOMS:
      return action.payload;
    default:
      return state;
  }
}
