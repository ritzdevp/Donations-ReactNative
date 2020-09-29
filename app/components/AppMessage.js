import React from 'react';
import {StyleSheet, View, Text, Modal, TouchableHighlight} from 'react-native';
import colors from '../styling/colorSchemes/colors';

const AppMessage = ({visible, onPress}) => {
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
            {' '}
            Thank you for using Donors Support!
          </Text>
          <Text style={styles.modalTextMessage}>
            {' '}
            We have received your request. Our personnel will get back to you
            shortly.
          </Text>
          <TouchableHighlight
            style={{
              ...styles.openButton,
              backgroundColor: colors.secondary,
            }}
            onPress={onPress}>
            <Text style={styles.textStyle}>OK</Text>
          </TouchableHighlight>
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
    fontWeight: 'normal',
    fontSize: 18,
    color: '#343B83',
    textAlign: 'center',
  },
});
