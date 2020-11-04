import React from 'react';
import 'react-native-gesture-handler';
import Navigator from './app/routes/drawer';
import {NavigationContainer} from '@react-navigation/native';
import { LogBox } from 'react-native';

export default function App() {
  return <Navigator />;
}

//Ignored Errors
LogBox.ignoreLogs(['VirtualizedLists should never be nested inside']); //This is caused due to FlatList present inside ScrollView
//Solution (TODO): Remove ScrollView and make use of ListHeaderComponent and ListFooterComponent parameters of FlatList.

