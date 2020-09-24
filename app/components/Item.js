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

import colors from '../styling/colorSchemes/colors';

const OffTick = '../styling/images/offTick.png';
const OnTick = '../styling/images/onTick.png';

const Item = (props) => {
  const [selected, setSelected] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const onPress = () => {
    setSelected(!selected);
  };

  return (
    <View style={selected ? styles.onTouch : styles.card}>
      <Image style={styles.stretch} source={props.imageSrc} />
      <TouchableOpacity onPress={onPress} underlayColor="none">
        <Image
          style={styles.tick}
          source={selected ? require(OnTick) : require(OffTick)}
        />
      </TouchableOpacity>
      <Text style={styles.itemName}>{props.itemName}</Text>
      <TextInput
        style={styles.quantity}
        placeholder="QTY"
        keyboardType="numeric"
        onChangeText={(quantity) => {
          //props.putItem(quantity, props.itemName);
          console.log('calling props.addItem...');
          props.addItem(props.itemName, quantity);
          setQuantity(quantity);
        }}
        editable={selected}
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
  },
  tick: {
    alignSelf: 'flex-end',
    right: 8.5,
    top: 8,
  },
});
