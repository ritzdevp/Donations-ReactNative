import {combineReducers} from 'redux';
import selectedItemsListReducer from './selectedItemsListReducer';
import donateItemsListReducer from './donateItemsListReducer';

export default combineReducers({
  selectedItemsListReducer,
  donateItemsListReducer,
});
