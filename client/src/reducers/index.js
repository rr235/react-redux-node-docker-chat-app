import { combineReducers } from 'redux';
import roomsReducer from './roomsReducer';
import selectedRoomReducer from './selectedRoomReducer';

export default combineReducers({
  rooms: roomsReducer,
  selected: selectedRoomReducer
});
