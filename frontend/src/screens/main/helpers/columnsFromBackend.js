import uuid from "uuid/v4";
export default function columnsFromBackend (arg, numOfDays) {

  return {
  [uuid()]: {
    name: "List of Activities",
    items: arg
  },
  [uuid()]: {
    name: "Day 1",
    items: []
  }
  ,
  [uuid()]: {
    name: "Day 2",
    items: []
  }
}};

