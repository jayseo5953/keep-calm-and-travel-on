import React from 'react';
import DayList from './DayList';
import ActivityItem from './ActivityItem';

const Main = () => {
  return (
    <div className='flexbox'>
      <h2>Main</h2>
      <DayList id="day-1" className="day_list">
        <ActivityItem id="activity-1" className="activity" draggable='true'>
          <p>Activity 1</p>
        </ActivityItem>
      </DayList>

      <DayList id="day-2" className="day_list">
        <ActivityItem id="activity-2" className="activity" draggable='true'>
        <p>Activity 2</p>
        </ActivityItem>
      </DayList>
    </div>
  );
};

export default Main;