import React from "react";
import PieceItem from "./PieceItem";
import PropTypes from "prop-types";

function PieceList({ pieces, updatePiece, deletePiece }) {
  return pieces.map((piece) => (
    <PieceItem
      key={piece.id}
      piece={piece}
      updatePiece={updatePiece}
      deletePiece={deletePiece}
    />
  ));
}

PieceList.propTypes = {
  pieces: PropTypes.array.isRequired,
  updatePiece: PropTypes.func.isRequired,
  deletePiece: PropTypes.func.isRequired,
};

export default PieceList;
