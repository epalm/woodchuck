import React from "react";

import PieceProvider from "./providers/PieceProvider";
import PieceList from "./components/PieceList";
import CreatePiece from "./components/CreatePiece";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Woodchuck</h1>
      <PieceProvider>
        <PieceList />
        <CreatePiece />
      </PieceProvider>
    </div>
  );
}

export default App;
