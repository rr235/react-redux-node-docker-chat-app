import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRooms, selectRoom } from '../actions';
import AddRoom from './AddRoom';

class Rooms extends Component {
  componentDidMount() {
    this.props.fetchRooms();
  }

  render() {
    return (
      <div>
        <h2>Chat Rooms</h2>
        <ul>{this.getRooms()}</ul>
        <AddRoom />
      </div>
    );
  }

  getRooms = () =>
    this.props.rooms.map(({ name }, index) => (
      <li key={index}>
        <input
          type="radio"
          name="rooms"
          id={`room-${index}`}
          value={name}
          onChange={this.handleSelection}
        />
        <label htmlFor={`room-${index}`}>{name}</label>
      </li>
    ));

  handleSelection = e => {
    this.props.selectRoom(e.target.value);
  };
}

const mapStateToProps = ({ rooms }) => ({
  rooms
});

export default connect(
  mapStateToProps,
  { fetchRooms, selectRoom }
)(Rooms);
