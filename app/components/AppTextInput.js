import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Text, Dimensions} from 'react-native';
import colors from '../styling/colorSchemes/colors';

function AppTextInput({mylabel, ...otherProps}) {
  const [isFocused,onFocusChange] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{mylabel} </Text>
      <View style={(isFocused) ? styles.inputContainerFocus: styles.inputContainer}>
        <TextInput  
          onFocus={() =>onFocusChange(true)} 
          onBlur ={() =>onFocusChange(false)} 
          style={ styles.TextInput } 
          {...otherProps} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: colors.offwhite,
    borderRadius: 20,
    marginVertical: 10,
    borderColor: colors.lightgrey,
    borderWidth: 2,
  },
  inputContainerFocus: {
    backgroundColor: colors.offwhite,
    borderRadius: 20,
    marginVertical: 10,
    borderColor: colors.primary,
    borderWidth: 2,
  },
  TextInput: {
    fontSize: 12,
    padding :8,
   
  },
  
  label: {
    fontSize: 12,
    lineHeight: 15,
    fontWeight: '500',
    fontStyle: 'normal',
    fontFamily: 'Montserrat',
    color: colors.darkblue,
    alignSelf: 'flex-start',
    width: '80%',
  },
  container: {
    // width: '90%',
  },
});

export default AppTextInput;
