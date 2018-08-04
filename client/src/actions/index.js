import axios from 'axios';
import { FETCH_CHATS, FETCH_ROOMS, CREATE_ROOM } from './types';

export const fetchRooms = () => async dispatch => {
  const res = await axios.get('/api/rooms');
  dispatch({ type: FETCH_ROOMS, payload: res.data });
};

export const createRoom = room => async dispatch => {
  const res = await axios.post('/api/rooms', room);
  dispatch({ type: CREATE_ROOM, payload: res.data });
};
