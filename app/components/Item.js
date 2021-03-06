import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {addItemToSelectedItemsList} from '../actions';
import {deleteItemFromSelectedItemsList} from '../actions';

import colors from '../styling/colorSchemes/colors';

const OffTick = '../styling/images/offTick.png';
const OnTick = '../styling/images/onTick.png';

const Item = (props) => {
  const [selected, setSelected] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const onPress = () => {
    setSelected(!selected);
    props.deleteItem(props.itemName);
  };

  return (
    <TouchableOpacity onPress={onPress} underlayColor="none">
      <View style={selected ? styles.onTouch : styles.card}>
        <Image style={styles.stretch} source={{uri:props.imageSrc}} />
          <Image
            style={styles.tick}
            source={selected ? require(OnTick) : require(OffTick)}
          />
        <Text style={styles.itemName}>{props.itemName}</Text>
        <TextInput
          style={styles.quantity}
          placeholder="QTY"
          keyboardType="numeric"
          onChangeText={(quantity) => {
            console.log('calling props.addItem...');
            props.addItem(props.itemName, quantity, props.itemID);
            setQuantity(quantity);
          }}
          editable={selected}
        />
      </View>
    </TouchableOpacity>
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
    addItem: (title, qty, itemID) => dispatch(addItemToSelectedItemsList(title, qty, itemID)),
    deleteItem: (title) => dispatch(deleteItemFromSelectedItemsList(title)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);

const styles = StyleSheet.create({
  card: {
    width: 151.52,
    height: 191,
    borderWidth: 2,
    backgroundColor: '#EBEFF2',
    borderColor: '#D2D7DB',
    borderRadius: 20,
    marginHorizontal: 7.24,
    marginTop: 15,
  },

  onTouch: {
    width: 151.52,
    height: 191,
    borderWidth: 2,
    backgroundColor: '#EBEFF2',
    borderColor: colors.primary,
    borderRadius: 20,
    marginHorizontal: 7.24,
    marginTop: 15,
  },

  itemName: {
    position: 'absolute',
    width: '100%',
    height: 25,
    left: 0,
    top: 110,

    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 20,

    textAlign: 'center',

    color: '#343B83',
  },
  quantity: {
    position: 'absolute',
    width: 102,
    height: 35,
    top: 138,

    backgroundColor: '#EBEFF2',
    borderWidth: 1,
    borderColor: '#9C9A7E',
    borderRadius: 10,

    alignSelf: 'center',

    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 15,
    textAlign: 'center',
  },
  stretch: {
    position: 'absolute',
    alignSelf: 'center',
    top: 21.96,
    height: 80,
    width: 80,
  },
  tick: {
    alignSelf: 'flex-end',
    right: 8.5,
    top: 8,
  },
});
