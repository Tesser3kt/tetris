interface GridCellProps {
  color: string;
}

const GridCell = ({ color }: GridCellProps) => {
  const cellBgColor = "bg-" + color + "-500/50";

  return <div className={"grid-cell " + cellBgColor}></div>;
};
