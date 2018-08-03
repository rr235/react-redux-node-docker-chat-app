import React, { Component } from 'react';
import avatar from './account-circle.svg';

class ChatMessage extends Component {
  render() {
    return (
      <div>
        <img
          src={avatar}
          alt={`${this.props.username} avatar`}
          width="40"
          height="40"
        />
        <div>
          <p>{this.props.username}</p>
          <p>{this.props.message}</p>
          <p>{this.props.time}</p>
        </div>
      </div>
    );
  }
}

export default ChatMessage;
