import React from "react";
import AvailablePieceItem from "./AvailablePieceItem";
import PropTypes from "prop-types";

function AvailablePieceList({ availablePieces, toggleEnabled, deletePiece }) {
  return availablePieces.map((piece) => (
    <AvailablePieceItem
      key={piece.id}
      piece={piece}
      toggleEnabled={toggleEnabled}
      deletePiece={deletePiece}
    />
  ));
}

AvailablePieceList.propTypes = {
  availablePieces: PropTypes.array.isRequired,
  toggleEnabled: PropTypes.func.isRequired,
  deletePiece: PropTypes.func.isRequired,
};

export default AvailablePieceList;
