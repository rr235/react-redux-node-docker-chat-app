import React, { Component } from 'react';

class Rooms extends Component {
  state = {
    rooms: [
      { name: 'Episode III' },
      { name: 'Episode IV' },
      { name: 'Episode V' }
    ]
  };

  render() {
    return (
      <div>
        <h2>Chat Rooms</h2>
        <ul>{this.getRooms()}</ul>
      </div>
    );
  }

  getRooms = () =>
    this.state.rooms.map(({ name }, index) => <li key={index}>{name}</li>);
}

export default Rooms;
