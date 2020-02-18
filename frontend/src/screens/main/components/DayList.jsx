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
  }


  let activities = props.activities
  console.log("acts", activities)


  if (!activities) {
    return <div
    id={props.id}
    className={props.className}
    onDrop={drop}
    onDragOver={dragOver}></div>
  }
  
    return activities.map(activity=>{ 
      return (
        <ActivityListItem 
        key={activity.id}
        id={props.id}
        className={props.className}
        onDrop={drop}
        onDragOver={dragOver}
        activity={activity}/>
      )
    })



  

  
};


export default DayList;