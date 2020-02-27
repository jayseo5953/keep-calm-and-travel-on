export default function saveToLocal (columns,budget) {
  
  let storedColumns = JSON.stringify(columns)
  let storedBudget = budget
  localStorage.setItem('columns', storedColumns );
  localStorage.setItem('budget', storedBudget)
}