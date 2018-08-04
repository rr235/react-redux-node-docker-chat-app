import React, { Component } from 'react';
import avatar from './account-circle.svg';
import './ChatMessage.css';

class ChatMessage extends Component {
  render() {
    return (
      <div className="chat-message__main">
        <img
          src={avatar}
          alt={`${this.props.username} avatar`}
          className="chat-message__avatar"
        />
        <div className="chat-message__wrapper">
          <p className="chat-message__name">{this.props.username}</p>
          <p className="chat-message__message">{this.props.message}</p>
          <p className="chat-message__time">
            {new Date(this.props.time).toLocaleString()}
          </p>
        </div>
      </div>
    );
  }
}

export default ChatMessage;
