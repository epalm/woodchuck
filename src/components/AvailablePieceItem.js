import React, { Component } from "react";
import PropTypes from "prop-types";

export class AvailablePieceItem extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.piece.enabled ? "none" : "line-through",
    };
  };

  render() {
    const { id, enabled, count, length } = this.props.piece;

    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            checked={enabled}
            onChange={this.props.toggleEnabled.bind(this, id)}
          />
          count={count}, length={length}
          <button
            style={btnStyle}
            onClick={this.props.deleteAvailablePiece.bind(this, id)}
          >
            x
          </button>
        </p>
      </div>
    );
  }
}

const btnStyle = {
  background: "#f00",
};

AvailablePieceItem.propTypes = {
  piece: PropTypes.object.isRequired,
  toggleEnabled: PropTypes.func.isRequired,
  deleteAvailablePiece: PropTypes.func.isRequired,
};

export default AvailablePieceItem;
