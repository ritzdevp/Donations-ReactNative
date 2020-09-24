/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './app/store';

const store = configureStore();

const DonorReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => DonorReduxApp);
