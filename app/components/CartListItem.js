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
} from 'react-native';

import {connect} from 'react-redux';
import {addItemToSelectedItemsList} from '../actions';
import {deleteItemFromSelectedItemsList} from '../actions';

import colors from '../styling/colorSchemes/colors';
const DeleteIcon = '../styling/images/deleteIcon.png';

const CartListItem = (props) => {
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
      <Text style={styles.tableQuantity}>{props.itemQty}</Text>
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
    height: 24,
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 12,
    backgroundColor: 'red',
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
    backgroundColor: 'orange',
    color: '#343B83',
    flex: 0.5,
  },

  deleteButton: {
    backgroundColor: colors.offwhite,
    marginRight: 15,
    backgroundColor: 'pink',
  },
});
