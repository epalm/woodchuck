import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import PieceList from "./components/PieceList";
import CreatePiece from "./components/CreatePiece";

import "./App.css";

function App() {
  const [pieces, setPieces] = useState([]);

  const createPiece = (count, length) => {
    const piece = {
      id: uuidv4(),
      count: count,
      length: length,
    };
    setPieces([...pieces, piece]);
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
    <div className="App">
      <h1>Woodchuck</h1>
      <PieceList
        pieces={pieces}
        updatePiece={updatePiece}
        deletePiece={deletePiece}
      />
      <CreatePiece createPiece={createPiece} />
    </div>
  );
}

export default App;
