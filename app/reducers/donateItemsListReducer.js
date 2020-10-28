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
            itemID: action.itemID
          }),
      };

    case 'DELETE_ITEM':
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

      const tempArr = [...state.donateItemsList];
      const index = tempArr.findIndex(function (item) {
        return item.title == action.title;
      });
      if (index < 0) {
        return {
          ...state,
          donateItemsList: state.donateItemsList,
        };
      }
      tempArr.splice(index, 1);
      state.donateItemsList = [...tempArr];
      return {
        ...state,
        donateItemsList: state.donateItemsList,
      };

      case 'DELETE_ALL_FROM_DONATEITEMSLIST':
        console.log('emptying donateitemslist');
        const emptyArr = [];
        state.donateItemsList = [...emptyArr];
        return {
          ...state,
          donateItemsList: state.donateItemsList,
        }

    default:
      return state;
  }
};

export default donateItemsListReducer;
