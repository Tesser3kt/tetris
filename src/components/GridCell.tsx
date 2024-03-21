interface GridCellProps {
  col: number;
  row: number;
  color: number;
}

const GridCell = ({ col, row, color }: GridCellProps) => {
  const colors = ["white", "red", "green", "blue", "cyan"];

  return (
    <div
      className="min-w-full min-h-full border"
      id={`cell-${row}-${col}`}
      style={{ backgroundColor: colors[color] }}
    ></div>
  );
};

export default GridCell;
