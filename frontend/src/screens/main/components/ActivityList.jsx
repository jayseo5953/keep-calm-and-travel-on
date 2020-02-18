import React from 'react';
import ActivityListItem from './ActivityListItem'

const ActivityList = (props) => {
  let activities = props.activities
  console.log("acts", activities)

  return activities.map(activity=>{ 
      return <ActivityListItem activity={activity}/>
    })
};

export default ActivityList;