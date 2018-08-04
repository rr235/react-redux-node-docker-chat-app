import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRooms } from '../actions';
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
    this.props.rooms.map(({ name }, index) => <li key={index}>{name}</li>);
}

const mapStateToProps = ({ rooms }) => ({
  rooms
});

export default connect(
  mapStateToProps,
  { fetchRooms }
)(Rooms);
