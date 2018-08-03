import React, { Component } from 'react';
import ChatMessage from './ChatMessage';

class ChatRoom extends Component {
  state = {
    messages: [
      {
        message: 'May the force be with you.',
        username: 'Yoda',
        time: new Date().toLocaleString()
      },

      {
        message: 'Dark side is more Powerful!!',
        username: 'Darth Vader',
        time: new Date().toLocaleString()
      }
    ]
  };

  render() {
    return (
      <div>
        <h2>Chat Room</h2>
        <div>{this.getMessages()}</div>
        <div>
          <form action="submit">
            <label htmlFor="message" />
            <input type="text" name="message" id="message" />
            <button>send</button>
          </form>
        </div>
      </div>
    );
  }

  getMessages = () =>
    this.state.messages.map((message, index) => <ChatMessage {...message} />);
}

export default ChatRoom;
