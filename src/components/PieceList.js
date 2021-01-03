import React from "react";

import { usePieces } from "../providers/PieceProvider";
import PieceItem from "./PieceItem";

function PieceList() {
  const { pieces } = usePieces();
  return pieces.map((piece) => <PieceItem key={piece.id} piece={piece} />);
}

export default PieceList;
