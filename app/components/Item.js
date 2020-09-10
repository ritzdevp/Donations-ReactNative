import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Image,
  TouchableHighlight,
} from 'react-native';

const AccessoriesImage = '../styling/images/Accessories.png';
const Tick = '../styling/images/tick.png';
const OffTick = '../styling/images/offTick.png';

const Item = (props) => {
  const onPress = () => alert('item tapped');

  return (
    <View style={styles.card}>
      <Image style={styles.stretch} source={props.imageSrc} />
      <TouchableHighlight onPress={onPress} underlayColor="none">
        <Image style={styles.tick} source={require(OffTick)} />
      </TouchableHighlight>
      <Text style={styles.itemName}>{props.itemName}</Text>
      <TextInput
        style={styles.quantity}
        placeholder="QTY"
        keyboardType="numeric"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 151.52,
    height: 191,
    borderWidth: 2,
    backgroundColor: '#EBEFF2',
    borderColor: '#D2D7DB',
    borderRadius: 20,
    marginHorizontal: 15,
    marginTop: 27,
  },

  onTouch: {
    position: 'absolute',
    width: 151.52,
    height: 190,
    left: 30,
    top: 10,
    borderWidth: 2,
    backgroundColor: '#EBEFF2',
    borderColor: '#D2D7DB',
    borderRadius: 20,
  },

  itemName: {
    position: 'absolute',
    width: '100%',
    height: 20,
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
    top: 135,

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

export default Item;
