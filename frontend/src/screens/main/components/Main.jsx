import React, {useEffect, useState} from 'react'
import manageStates from '../helpers/manageStates'
import columnsFromBackend from '../helpers/columnsFromBackend'
import onDragEnd from '../helpers/onDragEnd'
import './main.css';
import DndContext from './DndContext'
import BudgetGuage from './BudgetGuage'
import FormSection from './FormSection'

import GMap from '../../../components/TheMainEvent/Map';
import NavBar from '../../../components/General/NavBar';


function Main(props) {

  const city = props.match.params.city
  let budgetParam = !isNaN(props.match.params.budget)? props.match.params.budget:0;

  const [initialBudget, setInitialBudget] = useState(budgetParam)

  const [activities, setActivities] = useState([])
  const [columns, setColumns] = useState(columnsFromBackend(activities));
  // const [totalCost, setTotalCost] = useState(0);
  // const [budget, setBudget] = useState(mybudget-totalCost);

  const [selectedActivity, setSelectedActivity] = useState(null);

  // const [days,setDays] = useState(0)


  useEffect(()=>{
    // manageStates(city, setActivities, setColumns, columnsFromBackend, budget, setDays)
    manageStates(city, setActivities, setColumns, columnsFromBackend)
  },[city])


  // useEffect(()=>{
  //   let total = 0;
  //   for (let column in columns) {
  //     if (column !== 'list')
  //     total += columns[column].total
  //   }
  //   setTotalCost(total)
  // },[columns])

  let totalCost = 0;
  for (let column in columns) {
    if (column !== 'list')
    totalCost += columns[column].total
  }

  useEffect(()=>{
    let selectedActivities = [];
    for (let column in columns) {
      if (column !== 'list'){
        selectedActivities = [...columns[column].items, ...selectedActivities]
      }
    }
    setSelectedActivity(selectedActivities)
  },[columns])

  // useEffect(()=>{
  //   setBudget(mybudget-totalCost)
  // },[totalCost])

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


  const budget = initialBudget-totalCost
  return (
  <div className="main">
    {/* <h3>Destination: {city}</h3> */}
    {<h3>My Budget: {budget}</h3>}
    {!isNaN(budget)?
      <div> 
       {
        budget>=0?<BudgetGuage className='positive' budget=
        {budget} initialBudget={initialBudget}> {budget>=0?`+$${budget}`:""} </BudgetGuage>:""}
        </div>:""
       }

       {budget<0?<BudgetGuage className='negative' budget={budget} initialBudget={initialBudget}>-${-budget}</BudgetGuage>:""}
    
    <div className='dnd-context'>
      <DndContext
        onBeforeCapture={console.log("aastarted")}
        onDragEnd={result => onDragEnd(result, columns, setColumns)}
        budget={budget}
        columns={columns} 
        setColumns={setColumns}
        totalCost={totalCost}
        // setTotalCost={setTotalCost}
      />
    </div>

      <GMap initialCenter={activities} activities={selectedActivity} columns={columns} />

       <FormSection city={city} budget={initialBudget} setBudget={setInitialBudget} />

  </div>
  );
}

export default Main;