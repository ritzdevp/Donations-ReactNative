export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM_TO_SELECTEDITEMSLIST':
      console.log('hello');
      console.log(state);
      return {
        ...state,

        id: action.id,
        title: action.title,
        qty: action.qty,
      };

    default:
      return state;
  }
};
