import React, {useEffect, useState} from 'react';
import axios from 'axios';
import getActivities from '../helpers/getActivities.js'
import ActivityList from './ActivityList'
import DayList from './DayList'
import ActivityListItem from './ActivityListItem'


const Main = (props) => {
  const city = props.match.params.city
  const budget = props.match.params.budget

  const [activities, setActivities] = useState([])

  
  useEffect(()=>{
    getActivities(city, setActivities)
  },[])

  console.log("activities", activities)

  return (
    <div>
      <h2>Main</h2>
      <h1>{city}</h1>
      <h1>My Bugdet: ${budget}</h1>
      
      <div className="flexbox">

 
          <DayList key='day-1' id="day-1" className="day_list">

          {activities.map(activity=>{ 
            return (<ActivityListItem 

              id={activity.id}
              className="activity"
              draggable="true"
           
              > 
              {<p>{activity.name} ${activity.price_cents/100}</p>} 
              
              </ActivityListItem>)
          })}
          
          </DayList>
       
          <DayList key='day-2' id="day-2" className="day_list" activities={activities}   >
          
          </DayList>
        

      </div>

    </div>
  );
};

export default Main;

// dropEffect="none"