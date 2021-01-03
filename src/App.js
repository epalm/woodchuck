import React from "react";

import PieceProvider from "./providers/PieceProvider";
import PieceList from "./components/PieceList";
import PieceForm from "./components/PieceForm";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Woodchuck</h1>
      <PieceProvider>
        <PieceList />
        <PieceForm />
      </PieceProvider>
    </div>
  );
}

export default App;
