interface GridProps {
  cols: number;
  rows: number;
}

const Grid = ({ cols, rows }: GridProps) => {
  const gridClass =
    "grid-cols-" + cols.toString() + " grid-rows-" + rows.toString();

  return <div className={"grid " + gridClass}></div>;
};

export default Grid;
