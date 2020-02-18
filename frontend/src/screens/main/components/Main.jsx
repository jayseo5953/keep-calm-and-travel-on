import React, {useEffect, useState} from 'react';
import axios from 'axios';
import getActivities from '../helpers/getActivities.js'
import ActivityList from './ActivityList'
import DayList from './DayList'


const Main = (props) => {
  const city = props.match.params.city
  const budget = props.match.params.budget

  const [activities, setActivities] = useState([])

  
  useEffect(()=>{
    getActivities(city, setActivities)
  },[])

  console.log("a", activities)

  return (
    <div>
      <h2>Main</h2>
      <h1>{city}</h1>
      <h1>My Bugdet: ${budget}</h1>
      
      <div className="flexbox">

        <div>
          <DayList key='day-1' id="day-1" className="day_list"> Day1 </DayList>
        </div>
        <div>
          <DayList key='day-2' id="day-2" className="day_list" activities={activities} > List of Activities </DayList>
        </div>
        

      </div>

    </div>
  );
};

export default Main;



// const Main = () => {
//   return (
//     <div className='flexbox'>
//       <h2>Main</h2>
//       <DayList id="day-1" className="day_list">
//         <ActivityItem id="activity-1" className="activity" draggable='true'>
//           <p>Activity 1</p>
//         </ActivityItem>
//       </DayList>

//       <DayList id="day-2" className="day_list">
//         <ActivityItem id="activity-2" className="activity" draggable='true'>
//         <p>Activity 2</p>
//         </ActivityItem>
//       </DayList>
//     </div>
//   );
// };