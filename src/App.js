import React from "react";
import { v4 as uuidv4 } from "uuid";

import AvailablePieces from "./components/AvailablePieces";
import AddAvailablePiece from "./components/AddAvailablePiece";

import "./App.css";

class App extends React.Component {
  state = {
    availablePieces: [
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
    ],
  };

  toggleEnabled = (id) => {
    this.setState({
      availablePieces: this.state.availablePieces.map((piece) => {
        if (piece.id === id) {
          piece.enabled = !piece.enabled;
        }
        return piece;
      }),
    });
  };

  deleteAvailablePiece = (id) => {
    this.setState({
      availablePieces: [
        ...this.state.availablePieces.filter((piece) => piece.id !== id),
      ],
    });
  };

  addAvailablePiece = (count, length) => {
    const newPiece = {
      id: uuidv4(),
      enabled: true,
      count: count,
      length: length,
    };
    this.setState({
      availablePieces: [...this.state.availablePieces, newPiece],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Woodchuck</h1>
        <AvailablePieces
          availablePieces={this.state.availablePieces}
          toggleEnabled={this.toggleEnabled}
          deleteAvailablePiece={this.deleteAvailablePiece}
        />
        <AddAvailablePiece addPiece={this.addAvailablePiece} />
      </div>
    );
  }
}

export default App;
