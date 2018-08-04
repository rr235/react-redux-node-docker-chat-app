import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChatMessage from './ChatMessage';
import JoinRoom from './JoinRoom';

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
        <h2>{this.props.selected}</h2>
        {this.joinRoom()}
        <div>{this.getMessages()}</div>
        <div>
          <form action="submit">
            <label htmlFor="message">Message</label>
            <input type="text" name="message" id="message" />
            <button>send</button>
          </form>
        </div>
      </div>
    );
  }

  getMessages = () =>
    this.state.messages.map((message, index) => (
      <ChatMessage {...message} key={index} />
    ));

  joinRoom = () => {
    // hide join room if already joined
    return this.props.roomData.nickname ? (
      <h3>Joined as {this.props.roomData.nickname}</h3>
    ) : (
      <JoinRoom />
    );
  };
}

const mapStateToProps = ({ selected, roomData }) => {
  console.log(roomData);
  return { selected, roomData };
};

export default connect(mapStateToProps)(ChatRoom);
