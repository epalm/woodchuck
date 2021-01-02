import React from "react";
import PropTypes from "prop-types";

function PieceItem({ piece, updatePiece, deletePiece }) {
  const handleChange = (e) =>
    updatePiece({ ...piece, [e.target.name]: e.target.value });

  return (
    <div>
      <p>
        <input name="count" value={piece.count} onChange={handleChange} />
        <input name="length" value={piece.length} onChange={handleChange} />
        <button style={btnStyle} onClick={() => deletePiece(piece.id)}>
          x
        </button>
      </p>
    </div>
  );
}

const btnStyle = {
  background: "#f00",
};

PieceItem.propTypes = {
  piece: PropTypes.object.isRequired,
  deletePiece: PropTypes.func.isRequired,
};

export default PieceItem;
