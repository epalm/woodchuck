import React from "react";
import PropTypes from "prop-types";

function AvailablePieceItem({ piece, deletePiece }) {
  const { id, count, length } = piece;

  return (
    <div>
      <p>
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
  deletePiece: PropTypes.func.isRequired,
};

export default AvailablePieceItem;
