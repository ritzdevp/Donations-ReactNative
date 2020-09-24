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

    default:
      return state;
  }
};

export default selectedItemsListReducer;
