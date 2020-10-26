import React from 'react';
import {StyleSheet, View, Text, Image, ImageBackground} from 'react-native';
import AppButton from '../components/AppButton';
import colors from '../styling/colorSchemes/colors';
import AppBanner from '../components/AppBanner';

const About = ({navigation}) => {
  const goToSchoolRequirements = () => {
    navigation.navigate('SchoolRequirements');
  };
  const goToDonorSchoolList = () => {
    //navigation.navigate('DonorSchoolList');
    navigation.navigate('DonorItemList');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <ImageBackground
          style={styles.topBackground}
          imageStyle={{borderRadius: 50}}
          source={require('../styling/images/Vector.png')} 
        />
        <AppBanner navigation={navigation} />
        <Text>Hello</Text>
        {/* <Image style={{top: 400, left:10,width: 100, height: 100, backgroundColor: 'red'}} source={{uri: 'https://raw.githubusercontent.com/ritzacco/donorappimages/main/Accessories.png',}} />
         */}
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEFF2',
  },
  topContainer: {
    backgroundColor: '#3954FD',
    flex: 0.5,
    borderBottomRightRadius: 50,
  },
  normalText: {
    fontFamily: 'Montserrat',
    fontSize: 18,
    lineHeight: 22,
    color: colors.white,
  },
  rightText: {
    textAlign: 'right',
    fontFamily: 'Montserrat',
    fontSize: 18,
    lineHeight: 22,
    color: colors.white,
  },
  highlightedText: {
    fontWeight: 'bold',
  },
  introContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    // backgroundColor: '#000000',
    flex: 1,
  },
  schoolContainer: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  donorContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  topBackground: {
    position: 'absolute',
    left: 22,
    top: 22,
    bottom: 0,
    right: 0,
    resizeMode: 'stretch',
  },
  blueBox: {
    flex: 0.5,
    backgroundColor: '#3954FD',
  },
  whiteBox: {
    height: 50,
    width: '100%',

    backgroundColor: '#EBEFF2',
  },
  bottomContainer: {},
  actionText: {
    fontSize: 22,
    color: colors.primary,
  },
  actionContainer: {
    flex: 1,
    borderTopLeftRadius: 50,
    backgroundColor: colors.offwhite,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  accoliteLogo: {
    marginTop: 20,
    bottom: 5,
  },
  appButton: {
    height: 60,
    width: 300,
  },
});
