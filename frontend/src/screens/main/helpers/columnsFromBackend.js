import uuid from "uuid/v4";
export default function columnsFromBackend (arg) {
  return {
  [uuid()]: {
    name: "List of Activities",
    items: arg
  },
  [uuid()]: {
    name: "To Do",
    items: []
  }
}};

