import React, { useState } from "react";

import { usePieces } from "../providers/PieceProvider";

function PieceForm() {
  const [count, setCount] = useState("");
  const [length, setLength] = useState("");
  const { createPiece } = usePieces();

  const onSubmit = (e) => {
    e.preventDefault();
    createPiece(count, length);
    setCount("");
    setLength("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="count"
        placeholder="count"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <input
        type="text"
        name="length"
        placeholder="length"
        value={length}
        onChange={(e) => setLength(e.target.value)}
      />
      <input type="submit" value="Add Piece" />
    </form>
  );
}

export default PieceForm;
