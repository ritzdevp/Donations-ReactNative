import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Modal,
  TouchableHighlight,
} from 'react-native';
import colors from '../styling/colorSchemes/colors';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import EmptyScreen from './EmptyScreen';

export default function DonorDetailsForm({navigation}) {
  const [donorName, onChangeName] = React.useState('');
  const [contact, onChangeContact] = React.useState('');
  const [email, onChangeEmail] = React.useState('');
  const [contactErrorMsg, onChangeContactError] = React.useState('');
  const [nameErrorMsg, onChangeNameError] = React.useState('');
  const [emailErrorMsg, onChangeEmailError] = React.useState('');
  const [modalVisible, setModalVisible] = React.useState(false);

  function handleSubmit() {
    console.log(donorName, contact, email);
    if (donorName != '' && contact.length == 10 && email != '') {
      alert('Form Submitted!');
    } else {
      alert('Please check you details again');
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

  const goToWelcomeScreen = () => {
    setModalVisible(!modalVisible);
    navigation.navigate('WelcomeScreen');
  };

  return (
    <View style={styles.container}>
      <EmptyScreen
        heading="Poornapragathi Vidya Mandir Association"
        navigation={navigation}
      />

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Thank you for using Donors Support!
            </Text>
            <Text style={styles.modalTextMessage}>
              We have received your request. Our personnel will get back to you
              shortly.
            </Text>
            <TouchableHighlight
              style={{...styles.openButton, backgroundColor: colors.secondary}}
              // onPress={() => {
              //   setModalVisible(!modalVisible);
              //   goToWelcomeScreen;
              // }}
              onPress={goToWelcomeScreen}>
              <Text style={styles.textStyle}>OK</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <SafeAreaView style={styles.schoolForm}>
        <ScrollView style={styles.schoolFormScroll}>
          <AppTextInput
            mylabel="NAME"
            autoCorrect={false}
            keyboardType="default"
            onChangeText={(text) => onChangeName(text)}
            value={donorName}
            textContentType="name"
            placeholder="Enter Your Full Name"
            // onFocus ={onFocusChangeColor}
            onEndEditing={(event) => onBlurName(event.nativeEvent.text)}
          />
          <Text style={styles.errorMsg}>{nameErrorMsg}</Text>
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
            placeholder="Enter Your Email ID"
            onEndEditing={(event) => onBlurEmail(event.nativeEvent.text)}
          />
          <Text style={styles.errorMsg}>{emailErrorMsg}</Text>
          <View style={styles.confirmButtonLine} />
          <View style={styles.confirmButton}>
            <AppButton
              title="Submit"
              onPress={() => {
                setModalVisible(true);
              }}
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
  },
  errorMsg: {
    color: 'red',
  },
  modalView: {
    marginTop: '60%',
    backgroundColor: colors.offwhite,
    borderRadius: 20,
    padding: 70,
    height: '55%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1.0,
    shadowRadius: 3.84,
    elevation: 60,
  },
  openButton: {
    backgroundColor: colors.primary,
    borderRadius: 7,
    paddingHorizontal: 40,
    paddingVertical: 10,
    elevation: 10,
    margin: '10%',
  },
  textStyle: {
    color: '#fff',
    fontWeight: 'normal',
    textAlign: 'center',
    fontSize: 20,
  },
  modalText: {
    margin: '10%',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.primary,
    textAlign: 'center',
  },
  modalTextMessage: {
    margin: '2%',
    fontFamily: 'Montserrat',
    fontWeight: 'normal',
    fontSize: 18,
    color: '#343B83',
    textAlign: 'center',
  },
});
