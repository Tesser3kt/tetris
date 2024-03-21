import { useState } from "react";
import "./App.css";
import Grid from "./components/Grid";

class Tetrimino {
  anchor: number[];
  shape: number[][];
  color: number;

  constructor(anchor: number[], shape: number[][], color: number) {
    this.anchor = anchor;
    this.shape = shape;
    this.color = color;
  }
}

function App() {
  function runGame() {
    let gameOver = false;

    while (!gameOver) {}
  }

  function fillCells(rows: number, cols: number) {
    let cells = [];
    for (let i = 0; i < rows; i++) {
      let row = [];
      for (let j = 0; j < cols; j++) {
        row.push(0);
      }
      cells.push([...row]);
    }

    return cells;
  }

  const [tetrimino, setTetrimino] = useState(
    new Tetrimino(
      [10, 0],
      [
        [-1, 0],
        [1, 0],
        [1, 1],
        [0, 1],
      ],
      2
    )
  );

  const cols = 20;
  const rows = 40;
  const [cells, setCells] = useState(fillCells(rows, cols));

  return (
    <div className="App">
      <div className="grid-container">
        <Grid cols={cols} rows={rows} cells={cells} />
      </div>
    </div>
  );
}

export default App;
