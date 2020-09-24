import {createStore, combineReducers} from 'redux';
import allReducers from './reducers';

const rootReducer = combineReducers({
  allReducers,
});

const configureStore = () =>
  createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

export default configureStore;
