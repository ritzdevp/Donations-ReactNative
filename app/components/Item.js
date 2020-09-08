import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Button, Text} from 'react-native';

export default function Item(props) {
  return (
    <View style={styles.card}>
      <Text style={styles.itemName}>Some item</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    position: 'absolute',
    width: 151.52,
    height: 180,
    left: 30,
    top: 100,
    borderWidth: 2,
    backgroundColor: '#EBEFF2',
    borderColor: '#D2D7DB',
    borderRadius: 20,
  },

  itemName: {
    position: 'absolute',
    width: 93,
    height: 20,
    left: 29,
    top: 110,

    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 20,
    /* identical to box height */

    textAlign: 'center',

    color: '#343B83',
  },
});
