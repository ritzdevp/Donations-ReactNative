let nextId = 5;

export const addItemToSelectedItemsList = (title, qty, itemID) => ({
  type: 'ADD_ITEM_TO_SELECTEDITEMSLIST',
  id: nextId++,
  title: title,
  qty: qty,
  itemID: itemID
});

export const deleteItemFromSelectedItemsList = (title) => ({
  type: 'DELETE_ITEM_FROM_SELECTEDITEMSLIST',
  title: title,
});

export const deleteAllFromSelectedItemsList = (title) => ({
  type: 'DELETE_ALL_FROM_SELECTEDITEMSLIST',
  title: title,
})

export const addItemToDonateItemsList = (title, qty, itemID) => ({
  type: 'ADD_ITEM',
  id: nextId++,
  title: title,
  qty: qty,
  itemID: itemID
});

export const deleteItemFromDonateItemsList = (title) => ({
  type: 'DELETE_ITEM',
  title: title,
});

export const deleteAllFromDonateItemsList = (title) => ({
  type: 'DELETE_ALL_FROM_DONATEITEMSLIST',
  title: title,
});