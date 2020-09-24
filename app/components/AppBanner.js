import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native';
import colors from '../styling/colorSchemes/colors';

const DonorHands = '../styling/images/donor-logo-1.png';

const AppBanner = ({navigation}) => {
  return (
    <View style={styles.banner}>
      <TouchableOpacity onPress={() => navigation.navigate('WelcomeScreen')}>
        <Image style={styles.bannerLogo} source={require(DonorHands)} />
      </TouchableOpacity>
      <Text style={styles.bannerName}>DONORS SUPPORT</Text>
      <TouchableOpacity
        style={styles.bannerNav}
        onPress={() => navigation.openDrawer()}>
        <Image source={require('../styling/images/line-1.png')} />
        <Image source={require('../styling/images/line-2.png')} />
      </TouchableOpacity>
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
    alignItems: 'center',
    height: 50,
    marginTop: 15,
    marginBottom: 0,
    marginHorizontal: 20,
  },
  bannerButton: {
    width: 50,
    height: 50,
  },
  bannerNav: {
    height: 30,

    alignItems: 'flex-end',
    justifyContent: 'space-around',
  },
});
export default AppBanner;
