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

  return <div className="col-span-2 flex flex-wrap gap-2 px-auto " ref={ref}>
    {Array.from(Array(NUMBER_OF_WEEKS).keys()).map(wk => <div key={wk} className="rounded-lg size-8 md:size-10 lg:size-12 xl:size-14"
      onClick={() => console.log("HH")}
      style={{
        backgroundColor: HEAT_LEVEL[wk < 4 ? wk % 5 : 0], // HEAT_LEVEL[weakHeat[wk]] 
      }} />)}
  </div>;
};

export default WeeksGrid;
