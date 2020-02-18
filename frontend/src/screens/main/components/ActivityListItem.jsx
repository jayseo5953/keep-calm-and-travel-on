import React from 'react';


const ActivityListItem = (props) => {


  const dragStart = e => {
    const target = e.target;

    e.dataTransfer.setData("activityId", target.id);

    setTimeout( () => {
      target.style.display = "none";
    }, 0);

  };

  const dragOver = e => {
    e.stopPropagation();
  }

  let activity = props.activity

  return (
    <div
      id = {props.id}
      className = {props.className}
      draggable = {props.draggable}
      onDragStart = {dragStart} 
      onDragOver = {dragOver}
    >
      <p>{activity.name} ${activity.price_cents/100}</p>
    </div>
  );
};

export default ActivityListItem;

