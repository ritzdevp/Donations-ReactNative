import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../styling/colorSchemes/colors';

const AppButton = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}> {title} </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.secondary,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.primary,
    borderWidth: 2,
    padding: 10,
    // width: 300,
    // height: 60,
  },
  text: {
    fontSize: 14,
    color: colors.white,
  },
});

export default AppButton;
