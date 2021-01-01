import React from "react";
import AvailablePieceItem from "./AvailablePieceItem";
import PropTypes from "prop-types";

function AvailablePieceList({ availablePieces, deletePiece }) {
  return availablePieces.map((piece) => (
    <AvailablePieceItem
      key={piece.id}
      piece={piece}
      deletePiece={deletePiece}
    />
  ));
}

AvailablePieceList.propTypes = {
  availablePieces: PropTypes.array.isRequired,
  deletePiece: PropTypes.func.isRequired,
};

export default AvailablePieceList;
