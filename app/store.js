import {createStore, combineReducers} from 'redux';
import selectedItemsList from './reducers';

const rootReducer = combineReducers({
  selectedItemsList: selectedItemsList,
});

const configureStore = () =>
  createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

export default configureStore;
