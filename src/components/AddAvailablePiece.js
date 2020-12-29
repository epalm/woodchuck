import React, { Component } from "react";
import PropTypes from "prop-types";

export class AddAvailablePiece extends Component {
  defaultState = { count: "", length: "" };
  state = this.defaultState;

  onChange = (e) =>
    this.setState({
      [e.target.name]: e.target.value,
    });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addPiece(this.state.count, this.state.length);
    this.setState(this.defaultState);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="count"
          placeholder="count"
          value={this.state.count}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="length"
          placeholder="length"
          value={this.state.length}
          onChange={this.onChange}
        />
        <input type="submit" value="Add Piece" />
      </form>
    );
  }
}

AddAvailablePiece.propTypes = {
  addPiece: PropTypes.func.isRequired,
};

export default AddAvailablePiece;
