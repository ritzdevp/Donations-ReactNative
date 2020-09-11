import React from 'react';
import {StyleSheet, View, SafeAreaView, ScrollView} from 'react-native';
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
      <SafeAreaView style={styles.schoolForm}>
        <ScrollView style={styles.schoolFormScroll}>
          <AppTextInput
            mylabel="SCHOOL NAME"
            autoCorrect={false}
            keyboardType="default"
            onChangeText={(text) => onChangeSchoolName(text)}
            value={schoolName}
            textContentType="organizationName"
            placeholder="Enter School Name"
          />
          <AppTextInput
            mylabel="SCHOOL ADRESS"
            onChangeText={(text) => onChangeSchoolAddress(text)}
            value={schoolAddress}
            style={{height: 100}}
            textContentType="fullStreetAddress"
            multiline={true}
            placeholder="Enter Address"
          />
          <AppTextInput
            mylabel="CITY"
            autoCorrect={false}
            keyboardType="default"
            onChangeText={(text) => onChangeCity(text)}
            value={city}
            textContentType="addressCity"
            placeholder="Enter City Name"
          />
          <AppTextInput
            mylabel="CONTACT NUMBER"
            autoCorrect={false}
            keyboardType="numeric"
            onChangeText={(text) => onChangeContact(text)}
            value={contact}
            textContentType="telephoneNumber"
            placeholder="Enter Contact Number"
          />
          <AppTextInput
            mylabel="EMAIL"
            autoCorrect={false}
            keyboardType="email-address"
            onChangeText={(text) => onChangeEmail(text)}
            value={email}
            textContentType="emailAddress"
            placeholder="Enter School Email"
          />
          <View style={styles.confirmButtonLine} />
          <View style={styles.confirmButton}>
            <AppButton
              title="Submit"
              onPress={() => alert('Confirm Button Tapped')}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.offwhite,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  confirmButton: {
    position: 'relative',
    // height: 40,
    width: 200,
    alignSelf: 'center',
  },
  confirmButtonLine: {
    borderBottomColor: colors.lightgrey,
    borderBottomWidth: 2,
    marginVertical: 10,
  },
  schoolForm: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    width: '100%',
    // marginBottom: 10,
  },
  schoolFormScroll: {
    width: '80%',
    // backgroundColor: colors.black,
  },
});
