import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChatMessage from './ChatMessage';
import JoinRoom from './JoinRoom';
import { addChatMessage, loadChatMessage } from '../actions';
import socketIOClient from 'socket.io-client';

const socket = socketIOClient('http://localhost:5000'); // make dynamic later

class ChatRoom extends Component {
  state = {
    message: ''
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.selected !== this.props.selected) {
      socket.removeAllListeners(this.props.selected);
      socket.on(nextProps.selected, data => this.props.loadChatMessage(data));
    }
  }

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
              value={this.state.message}
            />
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    );
  }

  getMessages = () =>
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
      roomName: this.props.selected,
      message: JSON.parse(JSON.stringify(this.state.message)), // find a workaround later
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
  { addChatMessage, loadChatMessage }
)(ChatRoom);
