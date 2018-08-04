import { fromJS } from 'immutable';
import { JOIN_ROOM, ADD_CHAT_MESSAGE } from '../actions/types';

export default function(state = { chats: [] }, action) {
  switch (action.type) {
    case JOIN_ROOM:
      const newState = fromJS(state).merge(fromJS(action.payload));
      return newState.toJS();
    case ADD_CHAT_MESSAGE:
      if (action.payload.message) {
        const chats = fromJS(state)
          .get('chats')
          .push(action.payload);
        const newState = fromJS(state).merge({ chats: chats });
        return newState.toJS();
      } else {
        return state;
      }
    default:
      return state;
  }
}
