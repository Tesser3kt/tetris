import { useState } from "react";
import "./App.css";
import Grid from "./components/Grid";

function App() {
  function FillCells(rows: number, cols: number) {
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

  const cols = 20;
  const rows = 20;
  const [cells, setCells] = useState(FillCells(rows, cols));

  return (
    <div className="App">
      <div className="grid-container">
        <Grid cols={cols} rows={rows} />
      </div>
    </div>
  );
}

export default App;
