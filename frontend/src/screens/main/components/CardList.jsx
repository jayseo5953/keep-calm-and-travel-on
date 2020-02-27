import React, { useEffect } from "react";
import { Droppable } from "react-beautiful-dnd";
import Card from "./Card";

const CardList = props => {

  useEffect(() => {
    if (props.column.name !== "List of Activities") {
      const listOfCosts = props.column.items.map(act => {
        return act.price_cents / 100;
      });
      const totalCosts = listOfCosts.reduce((a, b) => a + b, 0);
      let newState = { ...props.columns };
      newState[props.columnId].total = totalCosts;
      props.setColumns(newState);
    }
  }, [props.column.items.length]);

  return (
    <Droppable
      droppableId={props.columnId}
      key={props.columnId}
      isDropDisabled={
        props.columnId === "list"
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
                ? "rgba(211,211,211,0.3)"
                : "rgba(211,211,211,0.2)"
            }}
          >
            {props.column.items.map((item, index) => {
              return (
                <Card
                  isClone="true"
                  key={item.id}
                  draggableId={item.id}
                  droppableId={props.columnId}
                  index={index}
                  item={item}
                  setColumns={props.setColumns}
                  columns={props.columns}
                  setHoverActivity={props.setHoverActivity}
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