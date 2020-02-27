import React, { useState } from "react";

export default function BudgetGauge(props) {
  const [style, setStyle] = useState({});

  if (props.budget>=0) {
    setTimeout(() => {
      let newStyle = {
          opacity: 1,
          minWidth:'9%',
          maxWidth:'100%',
          width: props.budget>=0? `${props.budget/props.initialBudget*100}%`:'0%'
        };
      setStyle(newStyle);
     
    }, 200);
    return (
      <div className="positive progress">
        <div className="progress-done" style={style}>
          {props.children}
        </div>
      </div>
    );
  } else {
    setTimeout(() => {
      let newStyle = {
          opacity: 1,
          minWidth:'9%',
          maxWidth:'100%',
          width: props.budget<0? `${-(props.budget/props.initialBudget*100)}%`:'0%'
        };
      setStyle(newStyle);
    }, 200);
    return (
      <div className="negative progress">
        <div className="progress-done" style={style}>
          {props.children}
        </div>
      </div>
    );
  }

    
}
