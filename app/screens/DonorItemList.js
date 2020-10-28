import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import DonorItem from '../components/DonorItem';
import AppButton from '../components/AppButton';
import TabSwitch from '../components/TabSwitch';
import colors from '../styling/colorSchemes/colors';
import EmptyScreen from './EmptyScreen';
import {connect} from 'react-redux';
import {addItemToDonateItemsList} from '../actions';
import {deleteItemFromDonateItemsList} from '../actions';
import DonateCartList from '../components/DonateCartList';
import DonorOthersBox from '../components/DonorOthersBox';
import OthersList from '../components/OthersList';
import itemListingApi from '../api/itemsListing';
// Image components
import imageSrc from '../constants/itemImageSource';

const OffTick = '../styling/images/offTick.png';
const OnTick = '../styling/images/onTick.png';
const DeleteIcon = '../styling/images/deleteIcon.png';

const DonorItemList = ({navigation}, props) => {
  console.log('props is ' + props);

  const {data: itemList, error, loading, request: loadItemDetails} = useApi(
    itemListingApi.getAllListedItems,
  );

  const {data: totalUnitsList, error2, loading2, request: getTotalQuantityPerItem} = useApi(
    itemListingApi.getTotalQuantityPerItem,
  );

  useEffect(() => {
    loadItemDetails();
  }, []);

  useEffect(() => {
    getTotalQuantityPerItem();
  }, []);

  //console.log(totalUnitsList);
  const access = new Map();
  for (let i = 0; i < totalUnitsList.length; i++){
    access.set(totalUnitsList[i].itemID, totalUnitsList[i].quantity);
  }
  //console.log(access);
  for (let i = 0; i < itemList.length; i++){
    itemList[i].totalUnits = 0;
    itemList[i].totalUnits += access.get(itemList[i]._id);
  }

  //console.log(itemList);


  const renderItem = ({item}) => (
    <DonorItem
      itemName={item.itemName}
      totalUnits={item.totalUnits}
      metric={item.metric}
      imageSrc={item.imageURL}
      id={item._id}
      itemID={item._id}
      isSchoolList={true}
      navigation={navigation}></DonorItem>
  );


  return (
    <View style={styles.container}>
      <EmptyScreen navigation={navigation} />
      <View style={styles.switchtabs}>
        <TabSwitch
          title="Items List"
          selectedStatus="true"
          //onPress={() => navigation.navigate('DonorItemList')}
        />
        <TabSwitch
          title="Schools List"
          onPress={() => navigation.navigate('DonorSchoolList')}
        />
      </View>

      {loading && (
        <ActivityIndicator
          animating={loading}
          size="large"
          color={colors.primary}
        />
      )}
      {error && (
        <>
          <Text style={styles.title}> Couldn't retrieve the Details </Text>
          <AppButton
            title="Retry"
            style={{width: 200}}
            onPress={loadSchoolListing}
          />
        </>
      )}
      <ScrollView>
        {!loading && !error && (
          <SafeAreaView style={{width: '100%'}}>
            <FlatList
              style={styles.listView}
              data={itemList}
              renderItem={renderItem}
              keyExtractor={(item) => item._id}
            />
          </SafeAreaView>
        )}
        {/* <OthersList /> */}
        <DonorOthersBox />

        <DonateCartList showButton={true} />
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
  switchtabs: {
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: colors.offwhite,
    borderColor: colors.primary,
    width: '90%',
    borderWidth: 2,
    borderRadius: 50,
    justifyContent: 'center',
    marginTop: '2%',
    marginBottom: 20,
  },
});

const ITEMSLIST = [
  {
    id: '1',
    title: 'Accessories',
    metric: 'units',
    totalUnits: '20',
    imageId: 1,
    imageSrc: require('../styling/images/Accessories.png'),
  },
  {
    id: '2',
    title: 'Bags',
    metric: 'pcs',
    totalUnits: '250',
    imageId: 2,
    imageSrc: require('../styling/images/Bags.png'),
  },
  {
    id: '3',
    title: 'Transportations',
    metric: 'unit',
    totalUnits: '2000',
    imageId: 3,
    imageSrc: require('../styling/images/Transportations.png'),
  },
  {
    id: '4',
    title: 'Copies',
    metric: 'pcs',
    totalUnits: '20000',
    imageId: 4,
    imageSrc: require('../styling/images/Copies.png'),
  },
];
