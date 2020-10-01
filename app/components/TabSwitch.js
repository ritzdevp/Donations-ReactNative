import React from 'react';
import {Text, StyleSheet, TouchableHighlight} from 'react-native';
import colors from '../styling/colorSchemes/colors';

const TabSwitch = ({title, onPress, selectedStatus}) => {
  return (
    <TouchableHighlight
      style={selectedStatus ? styles.buttonSelected : styles.buttonDeselected}
      onPress={onPress}
      underlayColor="none">
      <Text
        style={selectedStatus ? styles.textSelected : styles.textDeselected}>
        {' '}
        {title}{' '}
      </Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  buttonSelected: {
    backgroundColor: colors.secondary,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.primary,
    borderWidth: 2,
    padding: 10,
    elevation: 30,
    width: '55%',
  },
  buttonDeselected: {
    position: 'relative',
    backgroundColor: colors.offwhite,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: '45%',
  },
  textSelected: {
    fontSize: 14,
    color: colors.white,
  },
  textDeselected: {
    fontSize: 14,
    color: colors.primary,
  },
});

export default TabSwitch;
