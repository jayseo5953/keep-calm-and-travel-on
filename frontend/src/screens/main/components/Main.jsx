import React, {useEffect, useState} from 'react'
import manageStates from '../helpers/manageStates'
import columnsFromBackend from '../helpers/columnsFromBackend'
import onDragEnd from '../helpers/onDragEnd'
import './main.css';
import DndContext from './DndContext'


function Main(props) {
  const [activities, setActivities] = useState([])
  // console.log("acts",activities)

  const [columns, setColumns] = useState(columnsFromBackend(activities));
  const [days,setDays] =useState(0)

  // console.log('columns',columns)
  
  const city = props.match.params.city
  const budget = props.match.params.budget

  useEffect(()=>{
    manageStates(city, setActivities, setColumns, columnsFromBackend, budget, setDays)
  },[budget, city])


  // console.log("list items: ",columns['list'].items)
  // console.log("day1 items: ",columns['day1'].items)

  return (
  <>
    <h1>Destination: {city}</h1>
    {!isNaN(budget)?
      <div> 
      <h1>My Budget: ${budget}</h1>
      <h1>Numbe of Days: {days}</h1>
      </div>:
      ""}
    
    <div className='container-1'>
      <DndContext
        className='container-6'
        onDragEnd={result => onDragEnd(result, columns, setColumns)}
        columns={columns} setColumns={setColumns}
      />
    </div>
  </>
  );
}

export default Main;