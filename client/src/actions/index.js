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

export const selectRoom = roomName => async dispatch => {
  dispatch({ type: SELECT_ROOM, payload: roomName });
  const res = await axios.get('/api/chats', { params: { roomName } });
  dispatch({ type: FETCH_CHATS, payload: res.data });
};

export const joinRoom = nickname => dispatch => {
  dispatch({ type: JOIN_ROOM, payload: nickname });
};

export const addChatMessage = chat => async dispatch => {
  const res = await axios.post('/api/chats', chat);
  dispatch({ type: ADD_CHAT_MESSAGE, payload: res.data });
};
