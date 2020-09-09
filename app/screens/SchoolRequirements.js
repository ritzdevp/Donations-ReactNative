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
  SafeAreaView,
  Image,
} from 'react-native';
import Item from '../components/Item';
import AppButton from '../components/AppButton';

import colors from '../styling/colorSchemes/colors';

const DonorHands = '../styling/images/donor-logo-1.png';
const OffTick = '../styling/images/offTick.png';

const ITEMSLIST = [
  {
    id: '1',
    title: 'Accessories',
    imageSrc: '../styling/images/accessories.png',
  },
  {
    id: '2',
    title: 'Bags',
    imageSrc: '../styling/images/bag1.png',
  },
  {
    id: '3',
    title: 'Transportations',
    imageSrc: '../styling/images/bus2.png',
  },
  {
    id: '4',
    title: 'Copies',
    imageSrc: '../styling/images/copies1.png',
  },
];

export default function SchoolRequirements() {
  const renderItem = ({item}) => <Item itemName={item.title}></Item>;

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

      <FlatList
        numColumns={2}
        style={styles.listView}
        data={ITEMSLIST}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <View style={styles.othersBox}>
        <View>
          <Image source={require(OffTick)} />
        </View>
        <View>
          <Text style={styles.othersText}>Others</Text>
        </View>
      </View>

      <View style={styles.table}></View>
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
    flexDirection: 'column',
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
    top: 89,
    backgroundColor: colors.secondary,
  },
  headerMiniWhite: {
    position: 'absolute',
    width: '100%',
    height: 60,
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
    marginTop: 170,
    alignSelf: 'center',
    padding: 10,
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
  othersBox: {
    flexDirection: 'row',
    height: 25,
    width: 88,
    left: 30,
    backgroundColor: colors.offwhite,
  },
  othersText: {
    fontFamily: 'Montserrat',
    fontSize: 16,
    lineHeight: 20,

    left: 9,
    color: '#343B83',
  },
  table: {
    flexDirection: 'row',
    height: 150,
    width: '90%',
    top: 0,
    marginHorizontal: 30,

    backgroundColor: colors.offwhite,
  },
  confirmButton: {
    alignSelf: 'center',
    height: 60,
    width: 300,
    bottom: 24,
  },
});
