import React, { Component } from 'react';

class ChatRoom extends Component {
  render() {
    return (
      <div>
        <h2>Chat Room</h2>
        <div>Messages</div>
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
}

export default ChatRoom;
