import React from 'react';

const DayList = (props) => {
  const drop = e => {
    e.preventDefault();
    const activityId = e.dataTransfer.getData('activityId'); 
    const activity = document.getElementById(activityId);
    activity.style.display = 'block';

    e.target.appendChild(activity);
  }

  const dragOver = e => {
    e.preventDefault();
  }
  return (
    <div
      id={props.id}
      className={props.className}
      onDrop={drop}
      onDragOver={dragOver}
    >
      { props.children} 
    </div>
  );
};

export default DayList;