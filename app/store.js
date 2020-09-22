import {createStore, combineReducers} from 'redux';
import selectedItemsList from './reducers/selectedItemsList';

const rootReducer = combineReducers({
  selectedItemsList: selectedItemsList,
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
