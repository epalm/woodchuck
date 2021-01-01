import React from "react";
import PropTypes from "prop-types";

function AvailablePieceItem({ piece, toggleEnabled, deletePiece }) {
  const getStyle = () => {
    return {
      textDecoration: piece.enabled ? "none" : "line-through",
    };
  };

  const { id, enabled, count, length } = piece;

  return (
    <div style={getStyle()}>
      <p>
        <input
          type="checkbox"
          checked={enabled}
          onChange={() => toggleEnabled(id)}
        />
        count={count}, length={length}
        <button style={btnStyle} onClick={() => deletePiece(id)}>
          x
        </button>
      </p>
    </div>
  );
}

const btnStyle = {
  background: "#f00",
};

AvailablePieceItem.propTypes = {
  piece: PropTypes.object.isRequired,
  toggleEnabled: PropTypes.func.isRequired,
  deletePiece: PropTypes.func.isRequired,
};

export default AvailablePieceItem;
