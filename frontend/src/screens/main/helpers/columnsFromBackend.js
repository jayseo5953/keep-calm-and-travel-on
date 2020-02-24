import uuid from 'uuid/v4'

export default function columnsFromBackend (arg, numOfDays) {
  let result = {
    'list': {
      name: 'List of Activities',
      items: arg,
      total: 0
    },
    [uuid()]: {
      name: 'Day 1',
      items: [],
      total: 0
    }
    // ,
    // [uuid()]: {
    //   name: 'Day 2',
    //   items: [],
    //   total: 0
    // }
  }
  // for (let i = 2; i<= numOfDays; i++) {
  //   result[uuid()]={
  //     name: `Day${i}`,
  //     items: [],
  //     total: 0
  //   }
  // }

  return result
};

