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
    let arr=[1,2,3,4,5,6,7]
    return arr.map((e)=>{
      return (
        <div
        key={e}
        id={`activity-${e}`}
        className={props.className}
        onDrop={drop}
        onDragOver={dragOver}
        draggable={true}
        onDragOver={dragOver}><p>{e}</p></div>
      )
    })
  }
  
    return activities.map(activity=>{ 
      return (
        <ActivityListItem 
        key={activity.id}
        id={`activity-${activity.id}`}
        className={props.className}
        onDrop={drop}
        onDragOver={dragOver}
        draggable={true}
        activity={activity}/>
      )
    })
};


export default DayList;