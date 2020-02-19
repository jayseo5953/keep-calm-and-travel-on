export default function deleteList (columnId, columns, setColumns) {
  let newState = {...columns};
  delete newState[columnId];
  setColumns(newState)
}