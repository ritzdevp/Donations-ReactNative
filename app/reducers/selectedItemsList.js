const selectedItemsList = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM_TO_SELECTEDITEMSLIST':
      console.log('state is ' + state.selectedItemsList);
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          qty: action.qty,
        },
      ];

    default:
      return state;
  }
};

export default selectedItemsList;
