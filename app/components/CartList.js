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
import CartListItem from './CartListItem';
const DeleteIcon = '../styling/images/deleteIcon.png';

const CartList = (props) => {
  const renderListOfItems = ({item}) => (
    <CartListItem itemName={item.title} itemQty={item.qty} />
  );

  return (
    <View>
      <View style={styles.tableHeader}>
        <Text style={styles.tableHeaderText}>Items Selected</Text>
        <Text style={styles.tableHeaderText}>Quantity</Text>
      </View>
      <FlatList
        data={props.selectedItemsList}
        renderItem={renderListOfItems}
        keyExtractor={(item) => item.title}
        //extraData={}
      />
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
  console.log('in mapDispatchToProps');
  return {
    addItem: (title, qty) => dispatch(addItemToSelectedItemsList(title, qty)),
    deleteItem: (title) => dispatch(deleteItemFromSelectedItemsList(title)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartList);

const styles = StyleSheet.create({
  tableHeader: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingBottom: 5,
  },
  tableHeaderText: {
    top: 2,
    paddingTop: 3,
    fontFamily: 'Montserrat',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 12,
    backgroundColor: 'lightblue',
    color: '#343B83',
    flex: 1,
    marginLeft: 20,
  },
  //   tableItemsSelected: {
  //     top: 2,
  //     left: 20,
  //     paddingTop: 4,
  //     height: 24,
  //     fontFamily: 'Montserrat',
  //     fontWeight: 'bold',
  //     fontSize: 14,
  //     lineHeight: 12,
  //     backgroundColor: 'red',
  //     color: '#343B83',
  //     alignContent: 'center',
  //     flex: 1,
  //   },

  //   tableQuantity: {
  //     top: 2,
  //     paddingTop: 4,
  //     height: 24,
  //     fontFamily: 'Montserrat',
  //     fontWeight: 'bold',
  //     fontSize: 14,
  //     lineHeight: 12,
  //     backgroundColor: 'orange',
  //     color: '#343B83',
  //     flex: 0.5,
  //   },
  //   deleteButton: {
  //     backgroundColor: colors.offwhite,
  //     marginRight: 15,
  //     backgroundColor: 'pink',
  //   },
});
