import { fromJS } from 'immutable';
import {
  JOIN_ROOM,
  ADD_CHAT_MESSAGE,
  FETCH_CHATS,
  LOAD_CHAT_MESSAGE
} from '../actions/types';

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
    case LOAD_CHAT_MESSAGE:
      const { message, nickname } = action.payload;
      if (message && nickname !== state.nickname) {
        const chats = fromJS(state)
          .get('chats')
          .push(action.payload);
        const newState = fromJS(state).merge({ chats: chats });
        return newState.toJS();
      } else {
        return state;
      }
    case FETCH_CHATS:
      return fromJS(state)
        .merge({ chats: action.payload })
        .toJS();
    default:
      return state;
  }
}
