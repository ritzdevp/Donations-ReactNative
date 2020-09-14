import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Navigator from './app/routes/WelcomeScreenStack';
//todo-navigation
import SchoolDetailsForm from './app/screens/SchoolDetailsForm';
import AppBanner from './app/components/AppBanner';
import colors from './app/styling/colorSchemes/colors';
import WelcomeScreen from './app/screens/WelcomeScreen';
import DonorSchoolList from './app/screens/DonorSchoolList';
import SchoolRequirements from './app/screens/SchoolRequirements';

export default function App() {
  return <Navigator />;
  //return <SchoolRequirements />;
  //return <SchoolDetailsForm />;
  //return <WelcomeScreen />;
  //return <DonorSchoolList />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.offwhite,
  },
});
