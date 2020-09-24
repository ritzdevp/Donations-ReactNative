const initalState = {
  selectedItemsList: [],
};

const selectedItemsListReducer = (state = initalState, action) => {
  switch (action.type) {
    case 'ADD_ITEM_TO_SELECTEDITEMSLIST':
      console.log('state is ' + state.selectedItemsList);
      return {
        ...state,
        selectedItemsList: state.selectedItemsList
          .filter((item) => item.title != action.title)
          .concat({
            id: action.id,
            title: action.title,
            qty: action.qty,
          }),
      };

    case 'DELETE_ITEM_FROM_SELECTEDITEMSLIST':
      console.log('deleting item');
      return {
        ...state,
        selectedItemsList: state.selectedItemsList.filter((item) => {
          item.title != action.title;
        }),
      };

    default:
      return state;
  }
};

export default selectedItemsListReducer;
