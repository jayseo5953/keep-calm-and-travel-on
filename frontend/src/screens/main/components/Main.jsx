import React, { useEffect, useState } from "react";
import manageStates from "../helpers/manageStates";
import columnsFromBackend from "../helpers/columnsFromBackend";
import onDragEnd from "../helpers/onDragEnd";
import "./main.css";
import DndContext from "./DndContext";
import BudgetGuage from "./BudgetGuage";
import FormSection from "./FormSection";


import GMap from '../../../components/TheMainEvent/Map';
import Header from '../../../components/Header/Header';
import saveToLocal from '../helpers/saveToLocal';
import addCardList from '../helpers/addCardList'
import axios from 'axios';
import Button from '@material-ui/core/Button';


function Main(props) {

  const params = props.match.params;
  const city = params.city;
  const tripName = params.tripName;
  const tripId = params.tripId;

  let budgetParam = !isNaN(params.budget) ? params.budget : 0;

// ---------- INITIALIZING THE STATE ------------------------------- //
  const [initialBudget, setInitialBudget] = useState(budgetParam);
  const [columns, setColumns] = useState(columnsFromBackend([]));
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [hoverActivity, setHoverActivity] = useState(null);
  const [latestActivity, setLatestActivity] = useState(null);

  const [activities, setActivities] = useState([])
  const [friends, setFriends] = useState([])
  const [friendsActivities, setFriendsActivities] = useState(null)
  const [index, setIndex] = useState(2)


// ---------- USEEFFECT SECTION ----------------------------------- //
  useEffect(() => {
    let selectedActivities = [];
    for (let column in columns) {
      if (column !== "list") {
        if (columns[column].items.length) {
          setLatestActivity(columns[column].items[0].id);
          setTimeout(
            () =>
              setLatestActivity(prev =>
                prev === columns[column].items[0].id ? null : prev
              ),
            300
          );
        }
        selectedActivities = [...columns[column].items, ...selectedActivities];
      }
    }
    setSelectedActivity(selectedActivities);
  }, [columns]);

  let numOfColumns = Object.keys(columns).length;
  let lastItem = numOfColumns-1

  useEffect(() => {
    let newColumns = { ...columns };
    const keyArrays = Object.keys(newColumns);
    for (let column in newColumns) {
      let index = keyArrays.indexOf(column);
      if (column !== "list") {
        newColumns[column].name = `Day ${index}`;
      }
    }

    setColumns(newColumns)

    if(keyArrays.length-1<index) {
      setIndex(keyArrays.length-1)
    }

  },[numOfColumns])


  useEffect(()=>{
   
    manageStates(
      city, 
      tripId, 
      setColumns, 
      columnsFromBackend, 
      setActivities,
      setInitialBudget
      );
    if(props.user) {
      axios.get(`/users/${props.user.id}/friends/${city}`)
      .then(res=>{

        setFriends(res.data.rows);
      });
    }
  }, []);

  let totalCost = 0;
  for (let column in columns) {
    if (column !== "list") {
      totalCost += columns[column].total;
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
          budget={initialBudget}
        />
      </div>

      {!isNaN(budget) ? (
        <div>
          {" "}
          {budget >= 0 ? 
          (
            <BudgetGuage
              className="positive"
              budget={budget}
              initialBudget={initialBudget}
            >
              {" "}
              {`+$${budget}`}
            </BudgetGuage>
          ) : 
          (
            <BudgetGuage
              className="negative"
              budget={budget}
              initialBudget={initialBudget}
            >
            {`-$${-budget}`}
            </BudgetGuage>
          )}
        </div>
      ) : (
        ""
      )}

      <div className="dnd-context">

        <DndContext
          onDragEnd={result => onDragEnd(result, columns, setColumns)}
          budget={budget}
          columns={columns}
          setColumns={setColumns}
          totalCost={totalCost}
          setHoverActivity={setHoverActivity}
        />
    
      </div>

      <nav className='navi'>
        {numOfColumns>3?  <div className='slider'>
        <a href={
          // index-1>1?`#${index}`:'#1'
          // index===lastItem?`#${index-1}`:`#${index}`
          `#${index}`
        } 
          onClick={(e)=>{
          if(index===lastItem) {
            setIndex(index-2)
            return
          } 
          if (index>1){
            setIndex(index-1)
            console.log(index)
          }
          }}> 
          <Button style={{color:'white',padding:0}} variant="contained"  color='primary'>
          <i class="material-icons">
          arrow_back_ios
          </i>
          </Button>
        
        </a>
        <a href={
          // index+1<lastItem?`#${index}`:`#${lastItem}`
          // index===1?`#${index+1}`:`#${index}`
          `#${index}`
        } 
          onClick={(e)=>{
          if (index===1) {
            setIndex(index+2)
            return
          }
          if (index<lastItem){
            setIndex(index+1)
            console.log(index)
          }
          }}> <Button style={{color:'white',padding:0}} variant="contained"
          color='primary' >
          <i class="material-icons">
          arrow_forward_ios
          </i>
          </Button></a>
        </div>:""}
       

  
        <a  style={numOfColumns<=2?{right:'34vw',top:'55vh'}:{}} className='add-list' href={`#${lastItem}`} onClick={(()=>{
        addCardList(columns, setColumns)
        setIndex(lastItem)
        })}> 
        
        <Button style={{color:'white',padding:0}} variant="contained"  color='secondary'>
         
        <i className="material-icons">
        post_add
        </i>
          </Button>
        </a>

      </nav>
  
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
  );
}

export default Main;