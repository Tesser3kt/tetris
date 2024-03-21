import { useState, useEffect } from "react";
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

  public fall(): Tetrimino {
    return new Tetrimino(
      [this.anchor[0], this.anchor[1] + 1],
      this.shape,
      this.color
    );
  }
}

function App() {
  useEffect(() => {
    setTimeout(update, 1000);
  });

  function update() {
    console.log("update");
    setTetrimino(tetrimino.fall());
    let newCells = [...cells];

    for (let point of tetrimino.shape) {
      newCells[tetrimino.anchor[1] + point[1]][tetrimino.anchor[0] + point[0]] =
        tetrimino.color;
    }

    setCells([...newCells]);
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
      [10, 10],
      [
        [0, 0],
        [-1, 0],
        [1, 0],
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
      <button
        type="button"
        onClick={update}
        className="absolute left-4 top-4 bg-red-500/50 p-4 rounded-md border"
      >
        Start
      </button>
    </div>
  );
}

export default App;
