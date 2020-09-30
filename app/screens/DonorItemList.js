import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import DonorItem from '../components/DonorItem';
import AppButton from '../components/AppButton';
import colors from '../styling/colorSchemes/colors';
import EmptyScreen from './EmptyScreen';
import {connect} from 'react-redux';
import {addItemToDonateItemsList} from '../actions';
import {deleteItemFromDonateItemsList} from '../actions';
import DonateCartList from '../components/DonateCartList';

const OffTick = '../styling/images/offTick.png';
const OnTick = '../styling/images/onTick.png';
const DeleteIcon = '../styling/images/deleteIcon.png';

const DonorItemList = ({navigation}, props) => {
  console.log('props is ' + props);

  const renderItem = ({item}) => (
    <DonorItem
      itemName={item.title}
      schoolList={SCHOOLS_PER_ITEM}
      totalUnits={item.totalUnits}
      metric={item.metric}
      imageSrc={item.imageSrc}
      isSchoolList={true}></DonorItem>
  );

  return (
    <View style={styles.container}>
      <EmptyScreen
        heading="Donations for Educational Institutes"
        navigation={navigation}
      />
      <ScrollView>
        <SafeAreaView style={{width: '100%'}}>
          <FlatList
            style={styles.listView}
            data={ITEMSLIST}
            renderItem={renderItem}
            keyExtractor={(item) => item.title}
          />
        </SafeAreaView>
        <View style={styles.othersBox}>
          <View>
            <Image source={require(OffTick)} />
          </View>
          <View>
            <Text style={styles.othersText}>Others</Text>
          </View>
        </View>

        <View style={styles.table}>
          <DonateCartList showButton={true} />
        </View>
        <View style={styles.confirmButtonLine} />
        <View style={styles.confirmButton}>
          <AppButton
            title="Confirm"
            onPress={() => navigation.navigate('DonorForm')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    donateItemsList: state.allReducers.donateItemsListReducer.donateItemsList,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log('in mapDispatchToProps');
  return {
    addItem: (title, qty) => dispatch(addItemToDonateItemsList(title, qty)),
    deleteItem: (title) => dispatch(deleteItemFromDonateItemsList(title)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DonorItemList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: colors.offwhite,
  },

  listView: {
    alignSelf: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },

  othersBox: {
    marginVertical: 15,
    flexDirection: 'row',
    height: 20,
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: 20,
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
    top: 20,
    left: 30,
    paddingBottom: 10,
    marginBottom: 8,
    width: '90%',
    backgroundColor: colors.offwhite,
    alignSelf: 'stretch',
    alignItems: 'center',
    flex: 1,
  },
  tableContents: {
    width: '100%',
    alignSelf: 'center',
    backgroundColor: colors.offwhite,
    marginLeft: 40,
  },

  confirmButton: {
    alignSelf: 'center',
    height: 40,
    width: 200,
    marginBottom: 20,
  },
  confirmButtonLine: {
    borderBottomColor: colors.lightgrey,
    borderBottomWidth: 2,
    marginVertical: 15,
    width: '80%',
    alignSelf: 'center',
  },
});

const ITEMSLIST = [
  {
    id: '1',
    title: 'Accessories',
    metric: 'units',
    totalUnits: '20',
    imageSrc: require('../styling/images/Accessories.png'),
  },
  {
    id: '2',
    title: 'Bags',
    metric: 'pcs',
    totalUnits: '250',
    imageSrc: require('../styling/images/Bags.png'),
  },
  {
    id: '3',
    title: 'Transportations',
    metric: 'unit',
    totalUnits: '2000',
    imageSrc: require('../styling/images/Transportations.png'),
  },
  {
    id: '4',
    title: 'Copies',
    metric: 'pcs',
    totalUnits: '20000',
    imageSrc: require('../styling/images/Copies.png'),
  },
];

const SCHOOLS_PER_ITEM = [
  {schoolName: 'Seema Public School', reqUnits: '20', city: 'Banglore'},
  {schoolName: 'Poornapragathi Vidya Mandir', reqUnits: '24', city: 'Delhi'},
  {schoolName: 'Teresa Public School', reqUnits: '60', city: 'Mumbai'},
  {schoolName: 'Tinu Public School', reqUnits: '20', city: 'Banglore'},
  {schoolName: 'Vidya Mandir School', reqUnits: '24', city: 'Delhi'},
  {schoolName: 'Tagore Intl. Public School', reqUnits: '60', city: 'Mumbai'},
];
