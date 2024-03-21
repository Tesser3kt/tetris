import GridCell from "./GridCell";

interface GridProps {
  cols: number;
  rows: number;
  cells: number[][];
}

const Grid = ({ cols, rows, cells }: GridProps) => {
  const cellSize = {
    height: 30,
    width: 30,
  };

  const gridStyle = {
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
    width: `${cellSize.width * cols}px`,
    transform: "translate(-50%, -50%)",
  };
  const cellStyle = {
    width: `${cellSize.width}px`,
    height: `${cellSize.height}px`,
  };

  return (
    <div className="grid absolute top-1/2 left-1/2" style={gridStyle}>
      {cells.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          return (
            <div
              key={`cell-${rowIndex}-${colIndex}`}
              className="grid-cell-container"
              style={cellStyle}
            >
              <GridCell row={rowIndex} col={colIndex} color={cell} />
            </div>
          );
        })
      )}
    </div>
  );
};

export default Grid;
