import React from 'react';


const ActivityListItem = (props) => {

  const dragStart = e => {
    const target = e.target;

    e.dataTransfer.setData("activityId", target.id);
    // e.dataTransfer.effectAllowed = props.dropEffect;

    // setTimeout( () => {
    //   target.style.display = "none";
    // }, 0);

  };

  const dragOver = e => {
    e.stopPropagation();
    // e.dataTransfer.dropEffect = props.dropEffect
  }

  return (
    <div
      id = {props.id}
      className = {props.className}
      draggable = {props.draggable}
      onDragStart = {dragStart} 
      onDragOver = {dragOver}
    >
      {props.children}
    </div>
  );
};

export default ActivityListItem;