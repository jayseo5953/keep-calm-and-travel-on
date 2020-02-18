import React from 'react';
import ActivityListItem from './ActivityListItem'
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
    e.dataTransfer.dropEffect = props.dropEffect

  }

  return (
    <div
      id = {props.id}
      className={props.className}
      onDrop={drop}
      onDragOver={dragOver}
    >
      {props.children}
    </div>
  )


};


export default DayList;