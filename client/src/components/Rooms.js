import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRooms, selectRoom } from '../actions';
import AddRoom from './AddRoom';
import './Rooms.css';

class Rooms extends Component {
  componentDidMount() {
    this.props.fetchRooms();
  }

  render() {
    return (
      <section className="rooms_main">
        <header className="room__header">
          <h2>Chat Rooms</h2>
        </header>
        <ul className="room__list">{this.getRooms()}</ul>
        <footer className="room__footer">
          <AddRoom />
        </footer>
      </section>
    );
  }

  getRooms = () =>
    this.props.rooms.map(({ name }, index) => (
      <li key={index} className="room__list-item">
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
