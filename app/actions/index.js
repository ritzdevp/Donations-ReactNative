let nextId = 5;

export const addItemToSelectedItemsList = (title, qty) => ({
  type: 'ADD_ITEM_TO_SELECTEDITEMSLIST',
  id: nextId++,
  title: title,
  qty: qty,
});

export const deleteItemFromSelectedItemsList = (title) => ({
  type: 'DELETE_ITEM_FROM_SELECTEDITEMSLIST',
  title: title,
});

export const addItemToDonateItemsList = (title, qty) => ({
  type: 'ADD_ITEM',
  id: nextId++,
  title: title,
  qty: qty,
});

export const deleteItemFromDonateItemsList = (title) => ({
  type: 'DELETE_ITEM',
  title: title,
});
