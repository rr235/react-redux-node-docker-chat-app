import { SELECT_ROOM } from '../actions/types';

export default function(state = '', action) {
  switch (action.type) {
    case SELECT_ROOM:
      return action.payload;
    default:
      return state;
  }
}
