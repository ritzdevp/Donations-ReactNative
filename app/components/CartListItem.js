import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  FlatList,
  useState,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {color} from 'react-native-reanimated';
import {SafeAreaView} from 'react-native-safe-area-context';

import {connect} from 'react-redux';
import {addItemToSelectedItemsList} from '../actions';
import {deleteItemFromSelectedItemsList} from '../actions';

import colors from '../styling/colorSchemes/colors';
const DeleteIcon = '../styling/images/deleteIcon.png';
const EditPen = '../styling/images/editPen.png';
const SmallConfirm = '../styling/images/smallConfirm.png';

const CartListItem = (props) => {
  const [editQty, setEditQty] = React.useState(false);

  const deleteItemFromList = () => {
    props.deleteItem(props.itemName);
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        backgroundColor: colors.offwhite,
        justifyContent: 'space-between',
      }}>
      <Text style={styles.tableItemsSelected}>{props.itemName}</Text>

      <TextInput
        style={editQty ? styles.tableQuantityActive : styles.tableQuantity}
        value={props.itemQty}
        editable={editQty}
        onChangeText={(qty) => {
          props.addItem(props.itemName, qty);
        }}
      />

      <View>
        <TouchableOpacity
          activeOpacity={0.4}
          style={styles.editPenButton}
          onPress={() => setEditQty(!editQty)}>
          <Image source={editQty ? require(SmallConfirm) : require(EditPen)} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={deleteItemFromList}
        style={styles.deleteButton}>
        <Image source={require(DeleteIcon)} />
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedItemsList:
      state.allReducers.selectedItemsListReducer.selectedItemsList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (title, qty) => dispatch(addItemToSelectedItemsList(title, qty)),
    deleteItem: (title) => dispatch(deleteItemFromSelectedItemsList(title)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartListItem);

const styles = StyleSheet.create({
  tableItemsSelected: {
    top: 2,
    left: 20,
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
    flex: 0.5,
    height: 30,
    paddingTop: 4,
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 12,
    backgroundColor: colors.offwhite,
    borderWidth: 2,
    borderColor: colors.offwhite,
    color: '#343B83',
  },

  tableQuantityActive: {
    flex: 0.5,
    height: 35,
    paddingTop: 4,
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 12,
    backgroundColor: colors.offwhite,
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 10,
    color: '#343B83',
    elevation: 60,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1.0,
    shadowRadius: 3.84,
  },

  editPenButton: {
    marginLeft: 4,
    marginRight: 14,
    backgroundColor: colors.offwhite,
    height: 10,
  },

  deleteButton: {
    marginRight: 10,
    paddingRight: 10,
    backgroundColor: colors.offwhite,
  },
});
