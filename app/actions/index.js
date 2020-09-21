let nextID = 5;
// export const addItemToSelectedItemsList = (title, qty) => ({
//   type: 'ADD_ITEM_TO_SELECTEDITEMSLIST',
//   id: ++nextID,
//   title,
//   qty,
// });

export function addItemToSelectedItemsList(title, qty) {
  return {
    type: 'ADD_ITEM_TO_SELECTEDITEMSLIST',
    id: nextID++,
    title,
    qty,
  };
}
