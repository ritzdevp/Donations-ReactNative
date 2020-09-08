import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import colors from '../styling/colorSchemes/colors';

const AppBanner = () => {
  return (
    <View style={styles.banner}>
      <Image
        style={styles.bannerLogo}
        source={require('../styling/images/donor-logo-1.png')}
      />
      <Text style={styles.bannerName}>DONORS SUPPORT</Text>
      <View style={styles.bannerNav}>
        <Image source={require('../styling/images/line-1.png')} />
        <Image source={require('../styling/images/line-2.png')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bannerLogo: {
    height: 42,
    width: 54.25,
    top: 0,
  },
  bannerName: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 22,
    color: '#FFFFFF',
  },
  banner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    height: 50,
  },
  bannerButton: {
    width: 50,
    height: 50,
  },
  bannerNav: {
    height: 50,
    width: 50,
    alignItems: 'flex-end',
    margin: 2,
    backgroundColor: colors.black,
  },
});
export default AppBanner;
