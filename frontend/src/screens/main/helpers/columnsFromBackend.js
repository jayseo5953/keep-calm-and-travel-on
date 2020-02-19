export default function columnsFromBackend (arg, numOfDays) {
  let result = {
    'list': {
      name: 'List of Activities',
      items: arg
    },
    'day1': {
      name: 'Day1',
      items: []
    }
  }
  for (let i = 2; i<= numOfDays; i++) {
    result[`day${i}`]={
      name: `Day${i}`,
      items: []
    }
  }

  return result
};

