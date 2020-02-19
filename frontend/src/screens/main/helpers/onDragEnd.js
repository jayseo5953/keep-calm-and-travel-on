
export default function onDragEnd (result, columns, setColumns){
  const { source, destination } = result;
  if (!result.destination && source.droppableId === 'list') {
    return
  } else if (!result.destination && source.droppableId !== 'list') {
    let srcColumn = columns[source.droppableId];
    let srcItems = [...srcColumn.items];
    const [removed] = srcItems.splice(source.index, 1);

    setColumns({
      ...columns,
      [source.droppableId]: {
        ...srcColumn,
        items: srcItems
      }
    });
    return
  }
 
  // console.log("source:",source)
  // console.log("destinaiton: ", destination)

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems
      }
    });
  }
};