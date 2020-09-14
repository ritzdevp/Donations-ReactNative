import React from 'react';
import {StyleSheet, View, SafeAreaView, ScrollView, Text} from 'react-native';
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

  // ERROR MESAGES HOOK
  const [contactErrorMsg, onChangeContactError] = React.useState('');
  const [nameErrorMsg, onChangeNameError] = React.useState('');
  const [emailErrorMsg, onChangeEmailError] = React.useState('');
  const [cityErrorMsg, onChangeCityError] = React.useState('');

  function handleSubmit() {
    console.log(schoolName, city, contact, email);
    if (schoolName != '' && contact.length == 10 && email != '' && city != '') {
      alert('Form Submitted!');
    } else {
      alert('Please check you details again!');
    }
  }
  function onBlurName(inputVal) {
    if (inputVal.length < 1) {
      onChangeNameError('* required \n');
    } else {
      onChangeNameError('');
    }
  }
  function onBlurContact(inputVal) {
    if (inputVal.length < 1) {
      onChangeContactError('* required \n');
    } else if (inputVal.length != 10) {
      onChangeContactError('Contact Number must be of 10 digit \n');
    } else {
      onChangeContactError('');
    }
  }

  function onBlurEmail(inputVal) {
    if (inputVal.length < 1) {
      onChangeEmailError('* required \n');
    } else {
      onChangeEmailError('');
    }
  }
  function onBlurCity(inputVal) {
    if (inputVal.length < 1) {
      onChangeCityError('* required \n');
    } else {
      onChangeCityError('');
    }
  }

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
            onEndEditing={(event) => onBlurName(event.nativeEvent.text)}
          />
          <Text style={styles.errorMsg}>{nameErrorMsg}</Text>
          <AppTextInput
            mylabel="SCHOOL ADRESS"
            autoCorrect={false}
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
            onEndEditing={(event) => onBlurCity(event.nativeEvent.text)}
          />
          <Text style={styles.errorMsg}>{cityErrorMsg}</Text>
          <AppTextInput
            mylabel="CONTACT NUMBER"
            autoCorrect={false}
            keyboardType="numeric"
            onChangeText={(text) => onChangeContact(text)}
            value={contact}
            textContentType="telephoneNumber"
            placeholder="Enter Contact Number"
            onEndEditing={(event) => onBlurContact(event.nativeEvent.text)}
          />
          <Text style={styles.errorMsg}>{contactErrorMsg}</Text>
          <AppTextInput
            mylabel="EMAIL"
            autoCorrect={false}
            keyboardType="email-address"
            onChangeText={(text) => onChangeEmail(text)}
            value={email}
            textContentType="emailAddress"
            placeholder="Enter School Email"
            onEndEditing={(event) => onBlurEmail(event.nativeEvent.text)}
          />
          <Text style={styles.errorMsg}>{emailErrorMsg}</Text>
          <View style={styles.confirmButtonLine} />
          <View style={styles.confirmButton}>
            <AppButton title="Submit" onPress={handleSubmit} />
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
    marginVertical: 20,
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
  errorMsg: {
    color: 'red',
  },
});
