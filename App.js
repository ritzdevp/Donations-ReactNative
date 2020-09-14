import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Navigator from './app/routes/WelcomeScreenStack';
// import Navigator from './app/routes/SchoolRequirementsStack';
//todo-navigation
import SchoolDetailsForm from './app/screens/SchoolDetailsForm';
import AppBanner from './app/components/AppBanner';
import colors from './app/styling/colorSchemes/colors';
import WelcomeScreen from './app/screens/WelcomeScreen';
import DonorSchoolList from './app/screens/DonorSchoolList';
import SchoolRequirements from './app/screens/SchoolRequirements';
//import Navigator from './app/routes/DonorStack';

export default function App() {
  return <Navigator />;
  //return <SchoolDetailsForm />;
  // return <WelcomeScreen />;
  //return <DonorSchoolList />;
  //return <DonorDetailsForm />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.offwhite,
  },
});
