import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Navigator from './app/routes/SchoolRequirementsStack';
<<<<<<< HEAD
//todo-navigation
=======
import WelcomeScreen from './app/screens/WelcomeScreen';
import AppBanner from './app/components/AppBanner';
>>>>>>> 89127de3ddd224bd7af376e1ac1a215937191cb5

export default function App() {
  // return <Navigator />;
  return <WelcomeScreen />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EBEFF2',
  },
});
