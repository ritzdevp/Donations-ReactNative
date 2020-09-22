import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import 'react-native-gesture-handler';
//import Navigator from './app/routes/drawer';
import Navigator from './app/routes/drawer';
import {NavigationContainer} from '@react-navigation/native';
import SchoolDetailsForm from './app/screens/SchoolDetailsForm';
import AppBanner from './app/components/AppBanner';
import WelcomeScreen from './app/screens/WelcomeScreen';
import DonorSchoolList from './app/screens/DonorSchoolList';
import SchoolRequirements from './app/screens/SchoolRequirements';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './app/reducers';

const store = createStore(rootReducer);

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Navigator />
      </Provider>
    </NavigationContainer>
  );
}
