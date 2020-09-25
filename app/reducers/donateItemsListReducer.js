const initalState = {
  donateItemsList: [],
};

const donateItemsListReducer = (state = initalState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      console.log(
        'adding item :  state before adding ' + state.donateItemsList,
      );
      return {
        ...state,
        donateItemsList: state.donateItemsList
          .filter((item) => item.title != action.title)
          .concat({
            id: action.id,
            title: action.title,
            qty: action.qty,
          }),
      };

    case 'DELETE_ITEM':
      console.log('deleting item');
      return {
        ...state,
        donateItemsList: state.donateItemsList.filter((item) => {
          item.title != action.title;
        }),
      };

    default:
      return state;
  }
};

export default donateItemsListReducer;
