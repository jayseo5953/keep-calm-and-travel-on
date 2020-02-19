export default function columnsFromBackend (arg, numOfDays) {
  let result = {
    'list': {
      name: 'List of Activities',
      items: arg,
      total: 0
    },
    'day1': {
      name: 'Day1',
      items: [],
      total: 0
    }
  }
  for (let i = 2; i<= numOfDays; i++) {
    result[`day${i}`]={
      name: `Day${i}`,
      items: [],
      total: 0
    }
  }

  return result
};

