export default function deleteCard (card_index, cardList_id, columns, setColumns) {

  const column = columns[cardList_id];
  const copiedItems = [...column.items];
  const [removed] = copiedItems.splice(card_index, 1);

  setColumns({
    ...columns,
    [cardList_id]: {
      ...column,
      items: copiedItems
    }
  });
}