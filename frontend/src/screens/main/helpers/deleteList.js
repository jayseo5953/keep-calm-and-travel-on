export default function deleteList (columnId, columns, setColumns) {
  let newState = {...columns};
  let deletedItems = newState[columnId].items
  delete newState[columnId];
  newState['list'].items = [...deletedItems, ...newState['list'].items]
  setColumns(newState)
}