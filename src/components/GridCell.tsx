interface GridCellProps {
  col: number;
  row: number;
  color: number;
}

const GridCell = ({ col, row, color }: GridCellProps) => {
  const colors = ["red"];

  return (
    <div
      className={`min-w-full min-h-full bg-${colors[color]}-500/50`}
      id={`cell-${row}-${col}`}
    ></div>
  );
};

export default GridCell;
