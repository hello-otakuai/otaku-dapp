import React from "react";
import "@assets/css/visual.css";

const WeeksGrid = () => {
  const numWeeks = 52;
  const weeks = [];
  const redVariants = [
    "#F0272D0D", // 1 heat map grade/level
    "#F0272D40", // 2
    "#F0272D80", // 3
    "#F0272DBF", // 4
    "#F0272D", // 5
  ];

  const cols = Math.ceil(Math.sqrt(numWeeks));
  const rows = Math.ceil(numWeeks / cols);

  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      const weekIndex = i * cols + j;
      if (weekIndex < numWeeks) {
        const variantIndex = weekIndex % 5;
        row.push(
          <div
            key={weekIndex}
            className="week-dot"
            style={{ backgroundColor: redVariants[variantIndex] }}
          ></div>,
        );
      } else {
        row.push(<div key={`empty-${i}-${j}`} className="empty-dot"></div>);
      }
    }
    weeks.push(
      <div key={i} className="week-row">
        {row}
      </div>,
    );
  }

  return <div className="weeks-grid-container">{weeks}</div>;
};

export default WeeksGrid;
