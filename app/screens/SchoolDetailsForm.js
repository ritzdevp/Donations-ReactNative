import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import colors from '../styling/colorSchemes/colors';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import EmptyScreen from './EmptyScreen';

export default function SchoolDetailsForm() {
  const [schoolName, onChangeSchoolName] = React.useState('');
  const [schoolAddress, onChangeSchoolAddress] = React.useState('');
  const [city, onChangeCity] = React.useState('');
  const [contact, onChangeContact] = React.useState('');
  const [email, onChangeEmail] = React.useState('');

  return (
    <View style={styles.container}>
      <EmptyScreen heading="Enter School Details" />
      <View style={styles.schoolForm}>
        <AppTextInput
          mylabel="SCHOOL NAME"
          autoCorrect={false}
          keyboardType="default"
          onChangeText={(text) => onChangeSchoolName(text)}
          value={schoolName}
          textContentType="organizationName"
        />
        <AppTextInput
          mylabel="SCHOOL ADRESS"
          onChangeText={(text) => onChangeSchoolAddress(text)}
          value={schoolAddress}
          style={{height: 130}}
          textContentType="fullStreetAddress"
          multiline={true}
        />
        <AppTextInput
          mylabel="CITY"
          autoCorrect={false}
          keyboardType="default"
          onChangeText={(text) => onChangeCity(text)}
          value={city}
          textContentType="addressCity"
        />
        <AppTextInput
          mylabel="CONTACT NUMBER"
          autoCorrect={false}
          keyboardType="numeric"
          onChangeText={(text) => onChangeContact(text)}
          value={contact}
          textContentType="telephoneNumber"
        />
        <AppTextInput
          mylabel="EMAIL"
          autoCorrect={false}
          keyboardType="email-address"
          onChangeText={(text) => onChangeEmail(text)}
          value={email}
          textContentType="emailAddress"
        />
        <View style={styles.confirmButtonLine} />
        <View style={styles.confirmButton}>
          <AppButton
            title="Submit"
            onPress={() => alert('Confirm Button Tapped')}
          />
        </View>
      </View>
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
