import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import AvailablePieces from "./components/AvailablePieces";
import AddAvailablePiece from "./components/AddAvailablePiece";

import "./App.css";

function App() {
  const [availablePieces, setAvailablePieces] = useState([
    {
      id: uuidv4(),
      enabled: true,
      count: 2,
      length: 12 * 8, // 8 ft piece
    },
    {
      id: uuidv4(),
      enabled: true,
      count: 4,
      length: 12 * 12, // 12 ft piece
    },
    {
      id: uuidv4(),
      enabled: true,
      count: 99,
      length: 12 * 16, // 16 ft piece
    },
  ]);

  const toggleEnabled = (id) => {
    setAvailablePieces(
      availablePieces.map((piece) => {
        if (piece.id === id) {
          piece.enabled = !piece.enabled;
        }
        return piece;
      })
    );
  };

  const deleteAvailablePiece = (id) => {
    setAvailablePieces([...availablePieces.filter((piece) => piece.id !== id)]);
  };

  const addAvailablePiece = (count, length) => {
    const newPiece = {
      id: uuidv4(),
      enabled: true,
      count: count,
      length: length,
    };
    setAvailablePieces([...availablePieces, newPiece]);
  };

  return (
    <div className="App">
      <h1>Woodchuck</h1>
      <AvailablePieces
        availablePieces={availablePieces}
        toggleEnabled={toggleEnabled}
        deleteAvailablePiece={deleteAvailablePiece}
      />
      <AddAvailablePiece addPiece={addAvailablePiece} />
    </div>
  );
}

export default App;
