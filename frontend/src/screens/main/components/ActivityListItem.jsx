import React from "react";

const ActivityListItem = props => {
  let activity = props.activity;
  return (
    <div>
      <p>
        {activity.name} ${activity.price_cents / 100}
      </p>
    </div>
  );
};

export default ActivityListItem;