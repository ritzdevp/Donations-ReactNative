import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Image,
  FlatList,
  KeyboardAvoidingView,
} from 'react-native';

import {connect} from 'react-redux';
import {addItemToDonateItemsList} from '../actions';
import {deleteItemFromDonateItemsList} from '../actions';

import colors from '../styling/colorSchemes/colors';
import DonateCartListItem from './DonateCartListItem';
const DeleteIcon = '../styling/images/deleteIcon.png';

const DonateCartList = (props) => {
  const renderListOfItems = ({item}) => (
    <DonateCartListItem
      itemName={item.title}
      itemQty={item.qty}
      showButton={props.showButton}
    />
  );

  return (
    <View style={styles.table}>
      <View style={styles.tableHeader}>
        <Text style={styles.tableHeaderText}>Items Selected</Text>
        <Text style={styles.tableHeaderQty}>Quantity</Text>
      </View>

      <FlatList
        data={props.donateItemsList}
        renderItem={renderListOfItems}
        keyExtractor={(item) => item.title}
        //extraData={}
      />
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

export default connect(mapStateToProps, mapDispatchToProps)(DonateCartList);

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
    backgroundColor: colors.offwhite,
    color: '#343B83',
  },
  tableHeaderQty: {
    top: 2,
    paddingTop: 3,
    marginRight: '10%',
    fontFamily: 'Montserrat',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 12,
    backgroundColor: colors.offwhite,
    color: '#343B83',
  },
  table: {
    paddingBottom: 10,
    margin: 10,
    width: '100%',
    backgroundColor: colors.offwhite,
    //alignSelf: 'stretch',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: '10%',
  },

  tableContents: {
    width: '100%',
    alignSelf: 'center',
    backgroundColor: colors.offwhite,
    marginLeft: 40,
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
