export default function saveToLocal (columns) {
  
  let storedColumns = JSON.stringify(columns)
  localStorage.setItem('columns', storedColumns );

}