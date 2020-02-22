import uuid from 'uuid/v4'
export default function addCardList (columns,setColumns) {
  let keys = Object.keys(columns)
  let id = uuid()
  let name = `Day ${keys.length}`
  let newState = {
    ...columns,
    [id]:{
      name,
      items: [],
      total: 0
    }}
  setColumns(newState)
}
