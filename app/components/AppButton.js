import React from 'react';
import {Text, StyleSheet, TouchableHighlight} from 'react-native';
import colors from '../styling/colorSchemes/colors';

const AppButton = ({title, onPress}) => {
  return (
    <TouchableHighlight
      style={styles.button}
      onPress={onPress}
      underlayColor="none">
      <Text style={styles.text}> {title} </Text>
    </TouchableHighlight>
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
