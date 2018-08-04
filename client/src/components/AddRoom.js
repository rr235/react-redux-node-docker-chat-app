import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createRoom } from '../actions';

class AddRoom extends Component {
  state = {
    name: ''
  };

  render() {
    return (
      <form action="submit" onSubmit={this.submitHandler}>
        <input
          type="text"
          name="txtName"
          id="txtName"
          value={this.state.name}
          onChange={this.nameHandler}
          placeholder="Enter Room Name"
        />
        <input type="submit" value="Add" />
      </form>
    );
  }

  nameHandler = e => this.setState({ name: e.target.value });

  submitHandler = e => {
    e.preventDefault();
    const { name } = this.state;
    this.props.createRoom({ name });
    this.setState({ name: '' });
  };
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { createRoom }
)(AddRoom);
