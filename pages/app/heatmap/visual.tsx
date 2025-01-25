import React from 'react';
import '../../../assets/css/visual.css';

const WeeksGrid = () => {
  const numWeeks = 52;
  const weeks = [];

  // Calculate rows and columns for a near-square grid
  const cols = Math.ceil(Math.sqrt(numWeeks));
  const rows = Math.ceil(numWeeks / cols);

  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      const weekIndex = i * cols + j;
      if (weekIndex < numWeeks) {
        row.push(
          <div
            key={weekIndex}
            className={`week-dot ${weekIndex % 2 === 0 ? 'even' : 'odd'}`} // Example styling
          ></div>
        );
      } else {
          row.push(<div key={`empty-${i}-${j}`} className="empty-dot"></div>) //fill empty space
      }
    }
    weeks.push(<div key={i} className="week-row">{row}</div>);
  }

  return <div className="weeks-grid-container">{weeks}</div>;
};

export default WeeksGrid;