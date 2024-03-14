interface GridProps {
  cols: number;
  rows: number;
  cells: number[][];
}

const Grid = ({ cols, rows, cells }: GridProps) => {
  const cellSize = {
    height: 12,
    width: 12,
  };

  const gridStyle = {
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
    width: `${cellSize.width * cols}px`,
    transform: "translate(-50%, -50%)",
  };

  return (
    <div className="grid absolute top-2/4 left-2/4 gap-1" style={gridStyle}>
      {cells.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          return (
            <div
              className="w-3 h-3 bg-red-500/50"
              id={`cell-${rowIndex}-${colIndex}`}
              key={`cell-${rowIndex}-${colIndex}`}
            ></div>
          );
        })
      )}
    </div>
  );
};

export default Grid;
