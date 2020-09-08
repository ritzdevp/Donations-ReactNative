import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Navigator from './app/routes/SchoolRequirementsStack';
//todo-navigation
import WelcomeScreen from './app/screens/WelcomeScreen';
import AppBanner from './app/components/AppBanner';
import colors from './app/styling/colorSchemes/colors';

export default function App() {
  return <Navigator />;
  //return <WelcomeScreen />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.offwhite,
  },
});
