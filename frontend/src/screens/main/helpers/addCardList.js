export default function addCardList (columns,setColumns) {
  let keys = Object.keys(columns)
  console.log(keys)
  let id = `day${keys.length}`
  let name = `Day${keys.length}`
  let newState = {
    ...columns,
    [id]:{
      name: name,
      items: []
    }}
  setColumns(newState)
}
