import React, { createContext, useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

const PieceContext = createContext();
export const usePieces = () => useContext(PieceContext);

export default function PieceProvider({ children }) {
  const [pieces, setPieces] = useState([]);

  const createPiece = (count, length) => {
    setPieces([
      ...pieces,
      {
        id: uuidv4(),
        count: count,
        length: length,
      },
    ]);
  };

  const updatePiece = (updatedPiece) => {
    setPieces([
      ...pieces.map((piece) =>
        piece.id === updatedPiece.id ? updatedPiece : piece
      ),
    ]);
  };

  const deletePiece = (id) => {
    setPieces([...pieces.filter((piece) => piece.id !== id)]);
  };

  return (
    <PieceContext.Provider
      value={{ pieces, createPiece, updatePiece, deletePiece }}
    >
      {children}
    </PieceContext.Provider>
  );
}
