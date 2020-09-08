import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Navigator from './app/routes/SchoolRequirementsStack';
//todo-navigation

export default function App() {
  return <Navigator />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EBEFF2',
  },
});
