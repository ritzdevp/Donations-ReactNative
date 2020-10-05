// This screen consist of blue banner with all icons and the heading

import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import colors from '../styling/colorSchemes/colors';
import AppBanner from '../components/AppBanner';
import {TouchableOpacity} from 'react-native';

const backIcon = require('../styling/Icons/back.png');

export default function EmptyScreen({heading, navigation}) {
  return (
    <>
      <View style={styles.header}>
        <AppBanner navigation={navigation} />
      </View>
      <View style={styles.headerMini}>
        <View style={styles.headerMiniWhite}>
          <TouchableOpacity
            style={styles.backIcon}
            onPress={() => navigation.goBack()}>
            <Image source={backIcon} />
          </TouchableOpacity>
        </View>
      </View>
      {heading && <Text style={styles.titleText}>{heading} </Text>}
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 89,
    left: 0,
    top: 0,
    fontFamily: 'Montserrat',
    backgroundColor: colors.secondary,
    borderBottomEndRadius: 50,
  },
  backIcon: {
    height: 20,
    width: 20,
    position: 'absolute',
    left: 25,
    top: 25,
  },
  headerMini: {
    width: '100%',
    height: 50,
    backgroundColor: colors.secondary,
  },
  headerMiniWhite: {
    position: 'absolute',
    width: '100%',
    left: 0,
    top: 0,
    backgroundColor: colors.offwhite,
    borderTopLeftRadius: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '500',
    width: '70%',
    fontSize: 22,
    lineHeight: 27,
    textAlign: 'center',
    flexWrap: 'wrap',
    alignSelf: 'center',
    color: colors.primary,
    marginBottom: 10,
  },
});
