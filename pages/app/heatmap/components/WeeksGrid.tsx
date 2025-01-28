import React, { useEffect, useRef, useState } from "react";

const NUMBER_OF_WEEKS = 52;
const HEAT_LEVEL = [
  "#F0272D0D", // 1 
  "#F0272D40",
  "#F0272D80",
  "#F0272DBF",
  "#F0272D",
];

interface Heat { }

const WeeksGrid = ({ weekHeat: heat = [] }: { weekHeat?: Heat[] }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState<number | null>(null)

  useEffect(() => {
    if (!ref.current) return;
    const width = ref.current.clientWidth;
    let hw = Math.ceil(width / 10) - 5;
    console.log(hw, width)
    setSize(hw)
  }, []);

  return <div className="col-span-2 flex flex-wrap gap-2 px-auto " ref={ref}>
    {size && Array.from(Array(NUMBER_OF_WEEKS).keys()).map(wk => <div key={wk} className="rounded-lg" style={{
      width: size,
      height: size,
      backgroundColor: HEAT_LEVEL[wk % 5], // HEAT_LEVEL[weakHeat[wk]] 
    }} />)}
  </div>;
};

export default WeeksGrid;
