import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Navigator from './app/routes/SchoolRequirementsStack';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  // return <Navigator />;
  return <WelcomeScreen />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EBEFF2',
  },
});
