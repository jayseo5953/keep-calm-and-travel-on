import uuid from "uuid/v4";
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
  // return {
  // 'a': {
  //   name: "List of Activities",
  //   items: arg
  // },
  // 'b': {
  //   name: "Day 1",
  //   items: []
  // }
  // ,
  // 'c': {
  //   name: "Day 2",
  //   items: []
  // }
// }
};

