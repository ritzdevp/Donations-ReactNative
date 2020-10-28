import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';
import Item from '../components/Item';
import CartList from '../components/CartList';
import AppButton from '../components/AppButton';
import colors from '../styling/colorSchemes/colors';
import EmptyScreen from './EmptyScreen';
import OthersBox from '../components/OthersBox';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {connect, useSelector, useDispatch} from 'react-redux';
import {addItemToSelectedItemsList} from '../actions';
import {deleteItemFromSelectedItemsList} from '../actions';
import itemListingApi from '../api/itemsListing';
// Image components
import imageSrc from '../constants/itemImageSource';


const DonorHands = '../styling/images/donor-logo-1.png';
const OffTick = '../styling/images/offTick.png';
const OnTick = '../styling/images/onTick.png';
const DeleteIcon = '../styling/images/deleteIcon.png';

const SchoolRequirements = ({navigation}, props) => {
  console.log('props is ' + props);

  const {data: itemList, error, loading, request: loadItemDetails} = useApi(
    itemListingApi.getAllListedItems,
  );

  useEffect(() => {
    loadItemDetails();
  }, []);

  const deleteItem = (title) => {
    props.deleteItem(title);
  };

  const renderItem = ({item}) => (
    <Item
      itemName={item.itemName}
      imageSrc={item.imageURL}
      itemID={item._id}
      >
      </Item>
  );

  console.log('itemList is')
  console.log(itemList);
  // console.log('selectedItemsList');
  // console.log(props.selectedItemsList);
  // const dummy = useSelector((state) => state.allReducers.selectedItemsListReducer.selectedItemsList);
  // console.log('dummy is ' + dummy[0].id);
  
  

  return (
    <View style={styles.container}>
      <EmptyScreen
        heading=" Donations for Educational Institutes"
        navigation={navigation}
      />

      <ScrollView>
        <SafeAreaView>
          <FlatList
            numColumns={2}
            style={styles.listView}
            data={itemList}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
          />
        </SafeAreaView>

        <OthersBox />

        <View style={styles.table}>
          <CartList style={styles.tableContents} />
        </View>

        <View style={styles.confirmButtonLine} />
        <View style={styles.confirmButton}>
          <AppButton
            title="Confirm"
            onPress={() => navigation.navigate('SchoolDetailsForm')}
            //onPress={() => alert('confirm button tapped')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedItemsList:
      state.allReducers.selectedItemsListReducer.selectedItemsList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (title, qty) => dispatch(addItemToSelectedItemsList(title, qty)),
    deleteItem: (title) => dispatch(deleteItemFromSelectedItemsList(title)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SchoolRequirements);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: colors.offwhite,
  },

  listView: {
    alignSelf: 'center',
  },

  othersBox: {
    marginVertical: 15,
    flexDirection: 'row',
    height: 20,
    width: '80%',
    alignSelf: 'center',
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
    top: 10,
    width: '90%',
    backgroundColor: colors.offwhite,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  confirmButton: {
    alignSelf: 'center',
    height: 40,
    width: 200,
    marginBottom: 2,
  },
  confirmButtonLine: {
    borderBottomColor: colors.lightgrey,
    borderBottomWidth: 2,
    marginTop: 14,
    marginBottom: 15,
    width: '80%',
    alignSelf: 'center',
  },
});
