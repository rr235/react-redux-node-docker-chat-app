import axios from 'axios';
import {
  FETCH_CHATS,
  FETCH_ROOMS,
  CREATE_ROOM,
  SELECT_ROOM,
  JOIN_ROOM,
  ADD_CHAT_MESSAGE
} from './types';

export const fetchRooms = () => async dispatch => {
  const res = await axios.get('/api/rooms');
  dispatch({ type: FETCH_ROOMS, payload: res.data });
};

export const createRoom = room => async dispatch => {
  const res = await axios.post('/api/rooms', room);
  dispatch({ type: CREATE_ROOM, payload: res.data });
};

export const selectRoom = name => dispatch => {
  dispatch({ type: SELECT_ROOM, payload: name });
};

export const joinRoom = nickname => dispatch => {
  dispatch({ type: JOIN_ROOM, payload: nickname });
};

export const addChatMessage = chat => dispatch => {
  // const res = await axios.post('/api/chats', chat);
  dispatch({ type: ADD_CHAT_MESSAGE, payload: chat });
};
