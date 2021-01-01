import React from "react";
import AvailablePieceItem from "./AvailablePieceItem";
import PropTypes from "prop-types";

function AvailablePieceList({ availablePieces, updatePiece, deletePiece }) {
  return availablePieces.map((piece) => (
    <AvailablePieceItem
      key={piece.id}
      piece={piece}
      updatePiece={updatePiece}
      deletePiece={deletePiece}
    />
  ));
}

AvailablePieceList.propTypes = {
  availablePieces: PropTypes.array.isRequired,
  updatePiece: PropTypes.func.isRequired,
  deletePiece: PropTypes.func.isRequired,
};

export default AvailablePieceList;
