import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  useState,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {globalStyles} from '../styling/styles/global';
import colors from '../styling/colorSchemes/colors';
import Item from '../components/Item';
import AppButton from '../components/AppButton';

const DonorHands = '../styling/images/donor-logo-1.png';

export default function SchoolRequirements() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.donorHands} source={require(DonorHands)} />
        <Text style={styles.heading}>DONORS SUPPORT</Text>
      </View>
      <View style={styles.headerMini}>
        <View style={styles.headerMiniWhite}>
          <Text style={styles.titleText}>
            Donations for Educational Institutes
          </Text>
        </View>
      </View>
      <View style={styles.listView}>
        <Item itemName="Accessories"></Item>
      </View>
      <View style={styles.confirmButton}>
        <AppButton
          title="Confirm"
          onPress={() => alert('Confirm Button Tapped')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.offwhite,
  },
  header: {
    position: 'absolute',
    width: '100%',
    height: 89,
    left: 0,
    top: 0,
    backgroundColor: colors.secondary,
    borderBottomEndRadius: 50,
  },
  headerMini: {
    position: 'absolute',
    width: '100%',
    height: 60,
    left: 0,
    top: 89,
    backgroundColor: colors.secondary,
  },
  headerMiniWhite: {
    position: 'absolute',
    width: '100%',
    height: 60,
    left: 0,
    top: 0,
    backgroundColor: colors.offwhite,
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

    color: colors.primary,
  },

  listView: {
    backgroundColor: colors.offwhite,
    marginTop: 188,
    padding: 100,
  },
  heading: {
    position: 'absolute',
    width: 184,
    height: 22,
    top: 37,
    alignSelf: 'center',

    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 22,

    color: '#FFFFFF',
  },
  donorHands: {
    top: 21.88,
    left: 17.46,
  },
  confirmButton: {
    alignSelf: 'center',
    top: 390,
    height: 60,
    width: 300,
  },
});
