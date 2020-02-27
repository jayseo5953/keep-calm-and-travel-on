import React from "react";
import ActivityListItem from "./ActivityListItem";

const ActivityList = props => {
  let activities = props.activities;

  return activities.map(activity => {
    return <ActivityListItem key={activity.id} activity={activity} />;
  });
};

export default ActivityList;