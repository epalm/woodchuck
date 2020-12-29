import React, { Component } from "react";
import AvailablePieceItem from "./AvailablePieceItem";
import PropTypes from "prop-types";

export class AvailablePieces extends Component {
  render() {
    return this.props.availablePieces.map((piece) => (
      <AvailablePieceItem
        key={piece.id}
        piece={piece}
        toggleEnabled={this.props.toggleEnabled}
        deleteAvailablePiece={this.props.deleteAvailablePiece}
      />
    ));
  }
}

AvailablePieces.propTypes = {
  availablePieces: PropTypes.array.isRequired,
  toggleEnabled: PropTypes.func.isRequired,
  deleteAvailablePiece: PropTypes.func.isRequired,
};

export default AvailablePieces;
