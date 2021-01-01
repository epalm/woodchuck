import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import AvailablePieceList from "./components/AvailablePieceList";
import CreateAvailablePiece from "./components/CreateAvailablePiece";

import "./App.css";

function App() {
  const [availablePieces, setAvailablePieces] = useState([
    {
      id: uuidv4(),
      count: 2,
      length: 12 * 8, // 8 ft piece
    },
    {
      id: uuidv4(),
      count: 4,
      length: 12 * 12, // 12 ft piece
    },
    {
      id: uuidv4(),
      count: 99,
      length: 12 * 16, // 16 ft piece
    },
  ]);

  const createAvailablePiece = (count, length) => {
    const piece = {
      id: uuidv4(),
      count: count,
      length: length,
    };
    setAvailablePieces([...availablePieces, piece]);
  };

  const deleteAvailablePiece = (id) => {
    setAvailablePieces([...availablePieces.filter((piece) => piece.id !== id)]);
  };

  return (
    <div className="App">
      <h1>Woodchuck</h1>
      <AvailablePieceList
        availablePieces={availablePieces}
        deletePiece={deleteAvailablePiece}
      />
      <CreateAvailablePiece createPiece={createAvailablePiece} />
    </div>
  );
}

export default App;
