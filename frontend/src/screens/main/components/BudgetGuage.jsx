import React, { useState } from "react";

export default function BudgetGauge({ budget, initialBudget }) {
  const [style, setStyle] = useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${budget/initialBudget*100}%`
    };

    setStyle(newStyle);
  }, 200);

  return (
    <div className="progress">
      <div className="progress-done" style={style}>
        ${budget}
      </div>
    </div>
  );
}
