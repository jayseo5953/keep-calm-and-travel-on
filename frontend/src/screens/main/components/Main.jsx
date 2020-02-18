import React, {useEffect, useState} from 'react'
import getActivities from '../helpers/getActivities.js'
import axios from 'axios';
import ActivityList from './ActivityList'
import uuid from "uuid/v4";

import columnsFromBackend from '../helpers/columnsFromBackend'
import onDragEnd from '../helpers/onDragEnd'
import './main.css';


import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'


function Main(props) {
  const [activities, setActivities] = useState([])
  console.log("acts",activities)

  const [columns, setColumns] = useState(columnsFromBackend(activities));

  const [days,setDays] =useState(0)

  console.log('columns',columns)
  
  const city = props.match.params.city
  const budget = props.match.params.budget


  useEffect(()=>{
    getActivities(city,setActivities, setColumns, columnsFromBackend, budget, setDays)
  },[])

  return (
  <>
    {!isNaN(budget)?
      <div> 
      <h1>My Budget: ${budget}</h1>
      <h1>Numbe of Days: {days}</h1>
      </div>:
      ""}
    
    <div className='container-1'>
      
      <DragDropContext
        onDragEnd={result => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <div
            className='container-2'
              key={columnId}
            >
              <h2>{column.name}</h2>
              <div className='container-3'>
                <Droppable droppableId={columnId} key={columnId}
                >
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className='container-4'
                        style={{
                          background: snapshot.isDraggingOver
                            ? "lightblue"
                            : "lightgrey"
                        }}
                      >
                        {column.items.map((item, index) => {
                          return (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              {(provided, snapshot) => {
                                return (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    className='container-5'
                                    style={{
                                      userSelect: "none",
                                      backgroundColor: snapshot.isDragging
                                        ? "#263B4A"
                                        : "#456C86",
                                      ...provided.draggableProps.style
                                    }}
                                  >
                                    <img className='activity-image' src={`${item.image_url}`}  alt="image"/> {item.name} ${item.price_cents/100} 
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            </div>
          );
        })}
      </DragDropContext>
    </div>
  </>
  );
}

export default Main;

//props for droppable

// isDropDisabled='true'
// can put my own logic to this


// const Main = (props) => {
//   const city = props.match.params.city
//   const budget = props.match.params.budget

  // const [activities, setActivities] = useState([])

  
  // useEffect(()=>{
  //   getActivities(city,setActivities)
  // },[])

//   console.log("a", activities)

//   return (
//     <div>
//       <h2>Main</h2>
//       <h1>{city}</h1>
//       <h1>My Bugdet: ${budget}</h1>
//       <ActivityList activities={activities} />
//     </div>
//   );
// };