import React from 'react';
import Rooms from './Rooms';
import ChatRoom from './ChatRoom';

const App = () => (
  <div>
    <h1>Lets Chat</h1>
    <div>
      <Rooms />
    </div>
    <div>
      <ChatRoom />
    </div>
  </div>
);

export default App;
