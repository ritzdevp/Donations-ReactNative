import React from 'react';
import {StyleSheet, View, Text, Image, ImageBackground} from 'react-native';
import AppButton from '../components/AppButton';
import colors from '../styling/colorSchemes/colors';
import AppBanner from '../components/AppBanner';

const WelcomeScreen = ({navigation}) => {
  const goToSchoolRequirements = () => {
    navigation.navigate('SchoolRequirements');
  };
  const goToDonorSchoolList = () => {
    navigation.navigate('DonorSchoolList');
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
        <View style={styles.introContainer}>
          <View style={styles.schoolContainer}>
            <View>
              {/* <View style={{flexDirection: 'row'}}> */}
              <Text style={styles.rightText}>
                Over <Text style={styles.highlightedText}>100 Schools</Text>
              </Text>
              {/* </View> */}
              {/* <View style={{flexDirection: 'row'}}> */}
              <Text style={styles.rightText}>got Benefitted</Text>
              {/* </View> */}
            </View>
            <Image
              style={styles.introLogo}
              source={require('../styling/images/Group-2-bus.png')}
            />
          </View>

          <View style={styles.donorContainer}>
            <Image
              style={styles.introLogo}
              source={require('../styling/images/Group-3-donate.png')}
            />
            <Text style={styles.normalText}>
              Over{' '}
              <Text style={styles.highlightedText}>
                2500 investors {'\n'}Rs 2.5 crore {'\n'}
              </Text>
              already invested
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.blueBox}>
        <View style={styles.actionContainer}>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.actionText}>Educational Institute?</Text>
            <Text style={styles.actionText}>Need Donations?</Text>
          </View>
          <View style={styles.appButton}>
            <AppButton
              title="Click to enter your requirement"
              onPress={goToSchoolRequirements}
              style={styles.button}
            />
          </View>
          {/* <Text> {''}</Text> */}
          <Text style={styles.actionText}>Want to donate ?</Text>
          <View style={styles.appButton}>
            <AppButton
              title="Click to see schools’ requirements"
              onPress={goToDonorSchoolList}
            />
          </View>
          <Image
            style={styles.accoliteLogo}
            source={require('../styling/images/Accolite-logo.png')}
          />
        </View>
      </View>
    </View>
  );
};

export default WelcomeScreen;

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
