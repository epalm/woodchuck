import React from "react";
import AvailablePieceItem from "./AvailablePieceItem";
import PropTypes from "prop-types";

function AvailablePieces({
  availablePieces,
  toggleEnabled,
  deleteAvailablePiece,
}) {
  return availablePieces.map((piece) => (
    <AvailablePieceItem
      key={piece.id}
      piece={piece}
      toggleEnabled={toggleEnabled}
      deleteAvailablePiece={deleteAvailablePiece}
    />
  ));
}

AvailablePieces.propTypes = {
  availablePieces: PropTypes.array.isRequired,
};

export default AvailablePieces;
