import React, {useEffect, useState} from 'react';
import axios from 'axios';
import getActivities from '../helpers/getActivities.js'
import ActivityList from './ActivityList'


const Main = (props) => {
  const city = props.match.params.city
  const budget = props.match.params.budget

  const [activities, setActivities] = useState([])

  
  useEffect(()=>{
    getActivities(city,setActivities)
  },[])

  console.log("a", activities)

  return (
    <div>
      <h2>Main</h2>
      <h1>{city}</h1>
      <h1>My Bugdet: ${budget}</h1>
      <ActivityList activities={activities} />
    </div>
  );
};

export default Main;