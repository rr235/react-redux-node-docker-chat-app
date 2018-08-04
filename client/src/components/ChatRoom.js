import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChatMessage from './ChatMessage';
import JoinRoom from './JoinRoom';
import { addChatMessage, loadChatMessage } from '../actions';
import socketIOClient from 'socket.io-client';
import './ChatRoom.css';

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
      <section className="chat-room__main">
        {this.showHeader()}
        <div className="chat-room__message-wrapper">{this.getMessages()}</div>
        {this.showFooter()}
      </section>
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

  showHeader = () => {
    return this.props.selected ? (
      <header className="chat-room__header">
        <h2>{this.props.selected}</h2>
        {this.joinRoom()}
      </header>
    ) : null;
  };

  showFooter = () => {
    return this.props.roomData.nickname ? (
      <footer className="chat-room__footer">
        <form action="submit" onSubmit={this.submitHandler}>
          <input
            type="text"
            name="message"
            id="message"
            onChange={this.handleMessageChange}
            value={this.state.message}
            placeholder="Enter Message"
          />
          <input type="submit" value="Send" />
        </form>
      </footer>
    ) : null;
  };

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
