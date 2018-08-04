import { combineReducers } from 'redux';
import roomsReducer from './roomsReducer';
import selectedRoomReducer from './selectedRoomReducer';
import roomDataReducer from './roomDataReducer';

export default combineReducers({
  rooms: roomsReducer,
  selected: selectedRoomReducer,
  roomData: roomDataReducer
});
