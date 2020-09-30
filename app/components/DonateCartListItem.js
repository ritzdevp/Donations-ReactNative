import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  Modal,
} from 'react-native';

import {connect} from 'react-redux';
import {addItemToDonateItemsList} from '../actions';
import {deleteItemFromDonateItemsList} from '../actions';

import colors from '../styling/colorSchemes/colors';
const DeleteIcon = '../styling/images/deleteIcon.png';
const EditPen = '../styling/images/editPen.png';
const SmallConfirm = '../styling/images/smallConfirm.png';

const DonateCartListItem = (props) => {
  const [editModalVisible, setEditModalVisible] = React.useState(false);

  const deleteItemFromList = () => {
    props.deleteItem(props.itemName);
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        backgroundColor: colors.offwhite,
        justifyContent: 'space-evenly',
      }}>
      <Text style={styles.tableItemsSelected}>{props.itemName}</Text>

      <View
        style={{
          flexDirection: 'row',
        }}>
        <Text style={styles.tableQuantity}>{props.itemQty}</Text>
        {props.showButton && (
          <>
            <View>
              <Modal
                animationType="fade"
                transparent={true}
                visible={editModalVisible}
                onRequestClose={() => {
                  Alert.alert('Modal has been closed.');
                }}>
                <View style={styles.modalView}>
                  <TextInput
                    style={styles.editQuantityInModal}
                    placeholder="QTY"
                    keyboardType="numeric"
                    onChangeText={(qty) => {
                      props.addItem(props.itemName, qty);
                    }}
                  />

                  <TouchableOpacity
                    style={styles.submitButton}
                    onPress={() => setEditModalVisible(!editModalVisible)}>
                    <Image source={require(SmallConfirm)} />
                  </TouchableOpacity>
                </View>
              </Modal>
            </View>

            <View>
              <TouchableOpacity
                activeOpacity={0.4}
                style={styles.editPenButton}
                onPress={() => setEditModalVisible(!editModalVisible)}>
                <Image source={require(EditPen)} />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={deleteItemFromList}
              style={styles.deleteButton}>
              <Image source={require(DeleteIcon)} />
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    donateItemsList: state.allReducers.donateItemsListReducer.donateItemsList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (title, qty) => dispatch(addItemToDonateItemsList(title, qty)),
    deleteItem: (title) => dispatch(deleteItemFromDonateItemsList(title)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DonateCartListItem);

const styles = StyleSheet.create({
  tableItemsSelected: {
    top: 2,
    paddingTop: 4,
    paddingRight: 15,
    height: 24,
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 12,
    backgroundColor: colors.offwhite,
    color: '#343B83',
    alignContent: 'center',
    flex: 1,
  },

  tableQuantity: {
    top: 2,
    paddingTop: 4,
    height: 24,
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 12,
    backgroundColor: colors.offwhite,
    color: '#343B83',
    // flex: 0.5,
  },

  editPenButton: {
    marginHorizontal: 15,
    backgroundColor: colors.offwhite,
  },

  deleteButton: {
    marginRight: 10,
    paddingRight: 10,
    backgroundColor: colors.offwhite,
  },

  modalView: {
    marginTop: '120%',
    marginLeft: '60%',
    backgroundColor: colors.offwhite,
    borderRadius: 20,
    width: '20%',
    height: '14%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1.0,
    shadowRadius: 3.84,
    elevation: 5,
  },
  submitButton: {
    marginTop: '10%',
    backgroundColor: colors.offwhite,
    borderRadius: 7,
    paddingHorizontal: 15,
    paddingVertical: 10,
    elevation: 1,
  },
  modalText: {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: 10,
    color: colors.primary,
    textAlign: 'center',
  },
  modalTextMessage: {
    fontFamily: 'Montserrat',
    fontWeight: 'normal',
    fontSize: 10,
    color: '#343B83',
    textAlign: 'center',
  },

  editQuantityInModal: {
    marginTop: '10%',
    width: 50,
    height: 35,

    backgroundColor: '#EBEFF2',
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 10,

    alignSelf: 'center',

    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 15,
    textAlign: 'center',
  },
});
