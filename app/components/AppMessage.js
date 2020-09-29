import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Modal,
  TouchableOpacity,
  Image,
} from 'react-native';
import colors from '../styling/colorSchemes/colors';
const cancelIconUri = require('../styling/Icons/cancel.png');

const AppMessage = ({visible, onPress, userName}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>
            Thank you, {userName} {'\n'} for using {'\n'} Donors Support!!
          </Text>
          <Text style={styles.modalTextMessage}>
            We have received your request. Our personnel will get back to you
            shortly.
          </Text>
          <TouchableOpacity style={styles.cancelIcon} onPress={onPress}>
            <Image style={styles.stretch} source={cancelIconUri} />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default AppMessage;

const styles = StyleSheet.create({
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
    fontWeight: '500',
    fontSize: 18,
    color: '#343B83',
    textAlign: 'center',
  },
  textStyle: {
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 24,
  },
  cancelIcon: {
    position: 'absolute',
    right: 30,
    top: 30,
  },
  stretch: {
    width: 20,
    height: 20,
    resizeMode: 'stretch',
  },
});
