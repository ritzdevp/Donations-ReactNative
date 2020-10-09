import React from 'react';
import 'react-native-gesture-handler';
//import Navigator from './app/routes/drawer';
import Navigator from './app/routes/drawer';
import {NavigationContainer} from '@react-navigation/native';
import SchoolRequirements from './app/screens/SchoolRequirements';
// import SchoolDetailsForm from './app/screens/SchoolDetailsForm';
// import AppBanner from './app/components/AppBanner';
// import WelcomeScreen from './app/screens/WelcomeScreen';
// import DonorSchoolList from './app/screens/DonorSchoolList';
// import SchoolRequirements from './app/screens/SchoolRequirements';

export default function App() {
  return <Navigator />;
}
