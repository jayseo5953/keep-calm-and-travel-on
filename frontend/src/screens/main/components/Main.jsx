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


function Main(props) {
  // console.log("I am re-rendered!")
  const params = props.match.params; console.log(params)
  
  const city = params.city;
  const tripId = params.tripId;

  let budgetParam = !isNaN(params.budget)? params.budget:0;

  const [initialBudget, setInitialBudget] = useState(budgetParam)

  const [activities, setActivities] = useState([])
  const [columns, setColumns] = useState(columnsFromBackend(activities));
  
  const [selectedActivity, setSelectedActivity] = useState(null);

  useEffect(()=>{
    // manageStates(city, setActivities, setColumns, columnsFromBackend, budget, setDays)
    manageStates(city, tripId, setActivities, setColumns, columnsFromBackend)

  },[city])

      let totalCost = 0;
      for (let column in columns) {
        if (column !== 'list'){
        
          totalCost += columns[column].total
        }
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

      const budget = initialBudget-totalCost
      // console.log(budget)
      return (
     
        <div className="main">
          <div>
           <Header 
             brand="TRIPPER"
             fixed
             city={city}
             user={props.user}
             setUser={props.setUser}
            />
          </div>
              {
                !isNaN(budget)?
                <div> {budget>=0?<BudgetGuage className='positive' budget={budget} initialBudget={initialBudget}> {`+$${budget}`}</BudgetGuage>:
                <BudgetGuage className='negative' budget={budget} initialBudget={initialBudget}>{`-${-budget}`}</BudgetGuage>
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
            />
          </div>
      
            <GMap initialCenter={activities} activities={selectedActivity} columns={columns} />
      
            <FormSection 
              user={props.user} 
              city={city} 
              budget={initialBudget} 
              setBudget={setInitialBudget} 
              columns={columns} 
              total={totalCost}
                
              />
        </div>
        )

  
  
}

export default Main;