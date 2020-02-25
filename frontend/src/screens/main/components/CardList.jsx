import React, {
  // useState, 
  useEffect} from 'react';
import { Droppable } from 'react-beautiful-dnd'
import Card from './Card'



const CardList = (props) => {

  // const [dropDisabled,setDropDisabled] = useState(false)

  // const listOfPrices =  props.columns['list'].items.map((act)=>{
  //   return act.price_cents/100
  // })
  // const maxPrice = Math.max(...listOfPrices)
  // console.log(maxPrice)

  useEffect(()=>{
    if (props.column.name !== 'List of Activities'){
      const listOfCosts = props.column.items.map((act)=>{
        return act.price_cents/100
      })
      const totalCosts = listOfCosts.reduce((a,b)=> a+b,0)
      let newState = {...props.columns}
      newState[props.columnId].total=totalCosts
      props.setColumns(newState)
    }
  },[props.column.items.length])

  // useEffect(()=>{
  //   if (props.columnId === 'list') return
  //   if(props.budget <= 0) {
  //     setDropDisabled(true)
  //   } else {
  //     setDropDisabled(false)
  //   }

  // },[props.budget])

  return (
    <Droppable 
    droppableId={props.columnId}
    key={props.columnId}
    isDropDisabled={props.columnId==='list'
    // || dropDisabled
  }
    >
    {(provided, snapshot) => {
      return (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className={"inside-column"}
          style={{
            background: snapshot.isDraggingOver
              ? "rgba(211,211,211,0.5)"
              : "rgba(211,211,211,0.3)"
          }}
        >
          {props.column.items.map((item, index) => {
            return (
              <Card
                isClone='true'
                key={item.id}
                draggableId={item.id}
                droppableId={props.columnId}
                index={index}
                item={item}
                setColumns={props.setColumns}
                columns={props.columns}
              />
            );
          })}
          {provided.placeholder}
        </div>
      );
    }}
  </Droppable>
  );
};

export default CardList;