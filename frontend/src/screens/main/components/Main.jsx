import React, {useEffect, useState} from 'react'
import manageStates from '../helpers/manageStates'
import columnsFromBackend from '../helpers/columnsFromBackend'
import onDragEnd from '../helpers/onDragEnd'
import './main.css';
import DndContext from './DndContext'
import BudgetGuage from './BudgetGuage'
import FormSection from './FormSection'

import GMap from '../../../components/TheMainEvent/Map';
import Header from '../../../components/Header/Header';
import saveToLocal from '../helpers/saveToLocal';

import axios from 'axios';


function Main(props) {
  const params = props.match.params;
  const city = params.city;
  const tripName = params.tripName;
  const tripId = params.tripId;

  let budgetParam = !isNaN(params.budget)? params.budget:0;

  const [initialBudget, setInitialBudget] = useState(budgetParam)


  const [columns, setColumns] = useState(columnsFromBackend([]));
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [hoverActivity, setHoverActivity] = useState(null);
  const [latestActivity, setLatestActivity] = useState(null);
  const [activities, setActivities] = useState([])
  const [friends, setFriends] = useState([])
  const [friendsActivities, setFriendsActivities] = useState(null)


  useEffect(()=>{
    let selectedActivities = [];
    for (let column in columns) {
      if (column !== 'list'){
        if(columns[column].items.length) {
          setLatestActivity(columns[column].items[0].id);
          setTimeout(() => setLatestActivity((prev) => prev === columns[column].items[0].id ? null : prev), 300);
        }
        selectedActivities = [...columns[column].items, ...selectedActivities]
      }
    }
    setSelectedActivity(selectedActivities);
    
  },[columns])

  let numOfColumns = Object.keys(columns).length;

  useEffect(()=>{

    let newColumns = {...columns}
    const keyArrays = Object.keys(newColumns)
    for (let column in newColumns) {
      let index = keyArrays.indexOf(column)
      if (column !== 'list') {
        newColumns[column].name = `Day ${index}`
      }
    }
    setColumns(newColumns)
  },[numOfColumns])


  useEffect(()=>{
   
    manageStates(city, tripId, setColumns, columnsFromBackend, activities,setActivities);
    if(props.user) {
      axios.get(`/users/${props.user.id}/friends/${city}`)
      .then(res=>{
        setFriends(res.data.rows);
      })
    }
  },[])

  let totalCost = 0;
  for (let column in columns) {
    if (column !== 'list'){
      totalCost += columns[column].total
    }
  }

  // useEffect(()=>{
  //   setBudget(mybudget-totalCost)
  // },[totalCost])

 


  const budget = initialBudget-totalCost
  // console.log(budget)
  return (
  
    <div className="main">
      <div>
        <Header 
          color="transparent"
          brand="TRIPPER"
          fixed
          city={city}
          user={props.user}
          setUser={props.setUser}
          saveToLocal={saveToLocal}
          columns={columns}
          tripName={tripName}
        />
      </div>
          {
            !isNaN(budget)?
            <div> {budget>=0?<BudgetGuage className='positive' budget={budget} initialBudget={initialBudget}> {`+$${budget}`}</BudgetGuage>:
            <BudgetGuage className='negative' budget={budget} initialBudget={initialBudget}>{`-$${-budget}`}</BudgetGuage>
          }</div> : ""
          }
        
  
            
      
      <div className='dnd-context'>
        <DndContext
          onDragEnd={result => onDragEnd(result, columns, setColumns)}
          budget={budget}
          columns={columns} 
          setColumns={setColumns}
          totalCost={totalCost}
          // setTotalCost={setTotalCost}
          setHoverActivity={setHoverActivity}
        />
      </div>
  
        <GMap 
          initialCenter={activities} 
          activities={selectedActivity} 
          columns={columns}
          hoverActivity={hoverActivity}
          latestActivity={latestActivity}
          friendActivities={friendsActivities}
        />
  
        <FormSection 
          user={props.user} 
          city={city} 
          budget={initialBudget} 
          setBudget={setInitialBudget} 
          columns={columns} 
          total={totalCost}
          tripId={tripId}
          tripName={tripName}
          friends={friends}
          setFriendsActivities={setFriendsActivities}
          friendsActivities={friendsActivities}
          />
    </div>
    )

  
  
}

export default Main;