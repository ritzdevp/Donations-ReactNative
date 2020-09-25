const initalState = {
  selectedItemsList: [],
};

const selectedItemsListReducer = (state = initalState, action) => {
  switch (action.type) {
    case 'ADD_ITEM_TO_SELECTEDITEMSLIST':
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

      // ####################### ASK SAI WHY IS THIS NOT WORKING #####################//
      // return {
      //   ...state,
      //   selectedItemsList: state.selectedItemsList.filter((item) => {
      //     console.log('item.title=' + item.title);
      //     console.log('action.title=' + action.title);
      //     item.title !== action.title;
      //     //item.title === 'Bags';
      //   }),
      // };
      //###############################################################################//

      const tempArr = [...state.selectedItemsList];
      const index = tempArr.findIndex(function (item) {
        return item.title == action.title;
      });
      if (index < 0) {
        return {
          ...state,
          selectedItemsList: state.selectedItemsList,
        };
      }
      tempArr.splice(index, 1);
      state.selectedItemsList = [...tempArr];
      return {
        ...state,
        selectedItemsList: state.selectedItemsList,
      };

    default:
      return state;
  }
};

export default selectedItemsListReducer;
