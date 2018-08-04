import React, { Component } from 'react';
import { connect } from 'react-redux';
import { joinRoom } from '../actions';

class JoinRoom extends Component {
  state = {
    nickname: ''
  };

  render() {
    return (
      <form action="submit" onSubmit={this.submitHandler}>
        <label htmlFor="txtNickname">Nickname</label>
        <input
          type="text"
          name="txtNickname"
          id="txtNickname"
          value={this.state.nickname}
          onChange={this.nameHandler}
        />
        <input type="submit" value="Join" />
      </form>
    );
  }

  nameHandler = e => this.setState({ nickname: e.target.value });

  submitHandler = e => {
    e.preventDefault();
    const { nickname } = this.state;
    this.props.joinRoom({ nickname });
    this.setState({ nickname: '' });
  };
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { joinRoom }
)(JoinRoom);
