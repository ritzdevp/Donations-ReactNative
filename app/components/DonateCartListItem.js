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
        justifyContent: 'space-evenly',
      }}>
      <Text style={styles.tableItemsSelected}>{props.itemName}</Text>

      <View
        style={{
          flexDirection: 'row',
          width: '40%',
          justifyContent: 'flex-end',
        }}>
        {/* <Text style={styles.tableQuantity}>{props.itemQty}</Text> */}
        <TextInput
          style={editQty ? styles.tableQuantityActive : styles.tableQuantity}
          value={props.itemQty}
          editable={editQty}
          onChangeText={(qty) => {
            props.addItem(props.itemName, qty);
          }}
        />
        {props.showButton && (
          <>
            <View>
              <TouchableOpacity
                activeOpacity={0.4}
                style={styles.editPenButton}
                onPress={() => setEditQty(!editQty)}>
                <Image
                  source={editQty ? require(SmallConfirm) : require(EditPen)}
                />
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
    height: 35,
    width: '40%',
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
    height: 35,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
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
    marginRight: '10%',
    backgroundColor: colors.offwhite,
  },

  deleteButton: {
    paddingRight: 10,
    backgroundColor: colors.offwhite,
  },
});
