import React from 'react';
import Rooms from './Rooms';
import ChatRoom from './ChatRoom';
import './App.css';

const App = () => (
  <div className="app__main">
    <h1 className="app__heading">Let's Chat</h1>
    <div className="app__wrapper">
      <Rooms />
      <ChatRoom />
    </div>
  </div>
);

export default App;
