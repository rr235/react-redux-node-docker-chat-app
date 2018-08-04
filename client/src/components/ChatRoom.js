import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChatMessage from './ChatMessage';
import JoinRoom from './JoinRoom';
import { addChatMessage } from '../actions';

class ChatRoom extends Component {
  // state = {
  //   messages: [
  //     {
  //       message: 'May the force be with you.',
  //       username: 'Yoda',
  //       time: new Date().toLocaleString()
  //     },

  //     {
  //       message: 'Dark side is more Powerful!!',
  //       username: 'Darth Vader',
  //       time: new Date().toLocaleString()
  //     }
  //   ]
  // };

  render() {
    return (
      <div>
        <h2>{this.props.selected}</h2>
        {this.joinRoom()}
        <div>{this.getMessages()}</div>
        <div>
          <form action="submit" onSubmit={this.submitHandler}>
            <label htmlFor="message">Message</label>
            <input
              type="text"
              name="message"
              id="message"
              onChange={this.handleMessageChange}
            />
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    );
  }

  getMessages = chats =>
    this.props.roomData.chats.map(({ message, createdAt, nickname }, index) => (
      <ChatMessage
        message={message}
        time={createdAt}
        username={nickname}
        key={index}
      />
    ));

  joinRoom = () => {
    // hide join room if already joined
    return this.props.roomData.nickname ? (
      <h3>Joined as {this.props.roomData.nickname}</h3>
    ) : (
      <JoinRoom />
    );
  };

  handleMessageChange = e => {
    e.preventDefault();
    this.setState({ message: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    const chat = {
      message: this.state.message,
      createdAt: Date.now(),
      nickname: this.props.roomData.nickname
    };
    this.props.addChatMessage(chat);
    this.setState({ message: '' });
  };
}

const mapStateToProps = ({ selected, roomData }) => {
  return { selected, roomData };
};

export default connect(
  mapStateToProps,
  { addChatMessage }
)(ChatRoom);
