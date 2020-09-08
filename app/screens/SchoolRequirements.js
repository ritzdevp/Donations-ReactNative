import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {globalStyles} from '../styling/styles/global';
import Item from '../components/Item';

export default function SchoolRequirements() {
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.headerMini}>
        <View style={styles.headerMiniWhite}>
          <Text style={styles.titleText}>
            Donations for Educational Institutes
          </Text>
        </View>
        <Item></Item>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEFF2',
  },
  header: {
    position: 'absolute',
    width: '100%',
    height: 89,
    left: 0,
    top: 0,
    backgroundColor: '#3954FD',
    borderBottomEndRadius: 50,
  },
  headerMini: {
    position: 'absolute',
    width: '100%',
    height: 60,
    left: 0,
    top: 89,
    backgroundColor: '#3954FD',
  },
  headerMiniWhite: {
    position: 'absolute',
    width: '100%',
    height: 60,
    left: 0,
    top: 0,
    backgroundColor: '#EBEFF2',
    borderTopLeftRadius: 50,
  },
  titleText: {
    position: 'absolute',
    width: 245,
    height: 54,
    left: 65,
    top: 22,
    bottom: 16,

    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 22,
    lineHeight: 27,
    textAlign: 'center',

    color: '#3954FD',
  },
});
