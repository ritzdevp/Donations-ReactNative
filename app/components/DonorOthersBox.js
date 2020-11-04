import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import Collapsible from 'react-native-collapsible';

import {connect} from 'react-redux';
import {addItemToDonateItemsList} from '../actions';
import {deleteItemFromDonateItemsList} from '../actions';

import colors from '../styling/colorSchemes/colors';
const OffTick = '../styling/images/offTick.png';
const OnTick = '../styling/images/onTick.png';
const SmallConfirm = '../styling/images/smallConfirm.png';

const DonorOthersBox = (props) => {
  const [selected, setSelected] = useState(false);
  const [othersName, setOthersName] = useState('');
  const [othersQty, setOthersQty] = useState(0);

  const addOthersItem = (qty) => {
    props.addItem(othersName, qty);
    setOthersQty(qty);
    console.log(othersQty);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setSelected(!selected)}>
        <View style={styles.othersBox}>
          <View>
            <Image source={selected ? require(OnTick) : require(OffTick)} />
          </View>
          <View>
            <Text style={styles.othersText}>Others</Text>
          </View>
        </View>
      </TouchableOpacity>
      <Collapsible collapsed={!selected}>
        <View style={styles.othersCollapsibleBox}>
          <TextInput
            style={styles.nameEntry}
            multiline={true}
            onChangeText={(name) => setOthersName(name)}
          />
          <View
            style={{
              backgroundColor: colors.offwhite,
              flexDirection: 'row',
              alignSelf: 'flex-end',
            }}>
            <Text style={styles.enterQty}>Enter Quantity</Text>
            <TextInput
              style={styles.qtyEntry}
              placeholder="QTY"
              keyboardType="numeric"
              onChangeText={addOthersItem}
            />
          </View>
        </View>
      </Collapsible>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DonorOthersBox);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.offwhite,
    marginTop: '3%',
  },
  othersBox: {
    flexDirection: 'row',
    height: 20,
    width: '80%',
    alignSelf: 'center',
    backgroundColor: colors.offwhite,
  },
  othersText: {
    fontFamily: 'Montserrat',
    fontSize: 16,
    lineHeight: 20,
    left: 9,
    color: '#343B83',
  },
  othersCollapsibleBox: {
    marginTop: 10,
    height: 170,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: colors.offwhite,
    borderColor: colors.primary,
    borderWidth: 2,
    borderRadius: 20,
  },
  nameEntry: {
    backgroundColor: colors.offwhite,
    height: '45%',
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
    borderWidth: 2,
    borderColor: '#D2D7DB',
    borderRadius: 4,

    fontFamily: 'Montserrat',
    textAlignVertical: 'top',
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 15,
    textAlign: 'left',
    color: '#343B83',
  },
  qtyEntry: {
    backgroundColor: colors.offwhite,
    height: 35,
    width: 102,
    alignSelf: 'flex-end',
    marginRight: 20,
    marginLeft: 10,
    marginTop: 20,
    borderWidth: 2,
    borderColor: '#D2D7DB',
    borderRadius: 10,

    alignItems: 'center',
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 15,
    textAlign: 'center',
  },
  enterQty: {
    alignSelf: 'flex-end',
    color: '#343B83',
    paddingVertical: 10,

    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 15,
    textAlign: 'center',
  },
});
