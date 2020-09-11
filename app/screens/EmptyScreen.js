// This screen consist of blue banner with all icons and the heading

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import colors from '../styling/colorSchemes/colors';
import AppBanner from '../components/AppBanner';

export default function EmptyScreen({heading}) {
  return (
    <>
      <View style={styles.header}>
        <AppBanner />
      </View>
      <View style={styles.headerMini}>
        <View style={styles.headerMiniWhite}>
          <Text style={styles.titleText}>{heading} </Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 89,
    left: 0,
    top: 0,
    backgroundColor: colors.secondary,
    borderBottomEndRadius: 50,
  },
  headerMini: {
    width: '100%',
    height: 89,
    backgroundColor: colors.secondary,
  },
  headerMiniWhite: {
    position: 'absolute',
    width: '100%',
    left: 0,
    top: 0,
    backgroundColor: colors.offwhite,
    borderTopLeftRadius: 50,
    height: 89,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
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
    color: colors.primary,
  },
  heading: {
    position: 'absolute',
    width: 184,
    alignSelf: 'center',

    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 22,

    color: colors.white,
  },
});
