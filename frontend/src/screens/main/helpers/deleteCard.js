export default function deleteCard (card_index, cardList_id, columns, setColumns) {

  const column = columns[cardList_id];
  const copiedItems = [...column.items];
  // const [removed] = copiedItems.splice(card_index, 1);
  copiedItems.splice(card_index, 1);
  const list = columns[`list`];
  const listItems = [...list.items]
  // listItems.unshift(removed);
  setColumns({
    ...columns,
    [cardList_id]: {
      ...column,
      items: copiedItems
    },
    'list': {
      ...list,
      items: listItems
    }
  });
}