import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import colors from '../styling/colorSchemes/colors';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import EmptyScreen from './EmptyScreen';

export default function SchoolDetailsForm() {
  return (
    <View style={styles.container}>
      <EmptyScreen heading="List of Institutes need help" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.offwhite,
    justifyContent: 'flex-start',
  },

  confirmButton: {
    margin: 20,
    position: 'relative',
    height: 40,
    width: 200,
  },
  confirmButtonLine: {
    borderBottomColor: colors.lightgrey,
    borderBottomWidth: 5,
    marginVertical: 10,
  },
  schoolForm: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
  },
});
