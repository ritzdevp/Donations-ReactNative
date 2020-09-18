import {combineReducers} from 'redux';
import itemsList from './itemsList';

const rootReducer = combineReducers({
  itemsListReducer: itemsList,
});

export default rootReducer;
