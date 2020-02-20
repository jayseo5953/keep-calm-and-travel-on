import React, {useEffect, useState} from 'react'
import manageStates from '../helpers/manageStates'
import columnsFromBackend from '../helpers/columnsFromBackend'
import onDragEnd from '../helpers/onDragEnd'
import './main.css';
import DndContext from './DndContext'
import BudgetGuage from './BudgetGuage'

import GMap from '../../../components/TheMainEvent/Map';

function Main(props) {

  const city = props.match.params.city
  let mybudget = props.match.params.budget

  const [activities, setActivities] = useState([])
  const [columns, setColumns] = useState(columnsFromBackend(activities));
  const [totalCost, setTotalCost] = useState(0);
  const [budget, setBudget] = useState(mybudget-totalCost);

  const [selectedActivity, setSelectedActivity] = useState(null);

  // const [days,setDays] = useState(0)


  useEffect(()=>{
    // manageStates(city, setActivities, setColumns, columnsFromBackend, budget, setDays)
    manageStates(city, setActivities, setColumns, columnsFromBackend)
  },[city])

  useEffect(()=>{
    let selectedActivities = [];
    let total = 0;
    for (let column in columns) {
      if (column !== 'list'){
        total += columns[column].total
        // console.log(columns[column])
        selectedActivities = [...columns[column].items, ...selectedActivities]
      }
    }
    setTotalCost(total)
    setSelectedActivity(selectedActivities)


  },[columns])

  useEffect(()=>{
    setBudget(mybudget-totalCost)
  },[totalCost])

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
  },[Object.keys(columns).length])

  return (
  <div className="main">
    <h1>Destination: {city}</h1>
    {!isNaN(budget)?
      <div> 
       <BudgetGuage budget={budget} initialBudget={mybudget} />
      </div>:
      ""}
    
    <div className='container-1'>
      <DndContext
        className='container-6'
        onBeforeCapture={console.log("aastarted")}
        onDragEnd={result => onDragEnd(result, columns, setColumns, setTotalCost)}
        budget={budget}
        columns={columns} 
        setColumns={setColumns}
        totalCost={totalCost}
        setTotalCost={setTotalCost}
      />
    </div>

      <GMap initialCenter={activities} activities={selectedActivity} columns={columns} />

  </div>
  );
}

export default Main;