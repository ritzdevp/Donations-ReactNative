import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Navigator from './app/routes/WelcomeScreenStack';
import SchoolDetailsForm from './app/screens/SchoolDetailsForm';
import AppBanner from './app/components/AppBanner';
import WelcomeScreen from './app/screens/WelcomeScreen';
import DonorSchoolList from './app/screens/DonorSchoolList';
import SchoolRequirements from './app/screens/SchoolRequirements';

import {Provider} from 'react-redux';
import {connect} from 'react-redux';
import {createStore} from 'redux';
import {bindActionCreators} from 'redux';
import rootReducer from './app/reducers/index';

const store = createStore(rootReducer);

export default function App() {
  console.log('in app.js');
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
