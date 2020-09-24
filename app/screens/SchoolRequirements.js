import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  SafeAreaView,
} from 'react-native';
import Item from '../components/Item';
import AppButton from '../components/AppButton';
import colors from '../styling/colorSchemes/colors';
import EmptyScreen from './EmptyScreen';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {connect, useSelector, useDispatch} from 'react-redux';
import {addItemToSelectedItemsList} from '../actions';
import {deleteItemFromSelectedItemsList} from '../actions';

const DonorHands = '../styling/images/donor-logo-1.png';
const OffTick = '../styling/images/offTick.png';
const OnTick = '../styling/images/onTick.png';
const DeleteIcon = '../styling/images/deleteIcon.png';

const SchoolRequirements = (props, {navigation}) => {
  // const [ListOfSelectedItems, setListOfSelectedItems] = useState(
  //   useSelector(
  //     (state) => state.allReducers.selectedItemsListReducer.selectedItemsList,
  //   ),
  // );

  // console.log(
  //   'okayyy ' +
  //     useSelector(
  //       (state) => state.allReducers.selectedItemsListReducer.selectedItemsList,
  //     ),
  // );

  console.log('props is ' + props);

  const deleteItem = (title) => {
    props.deleteItem(title);
  };

  const renderItem = ({item}) => (
    <Item
      itemName={item.title}
      //itemQty={item.qty}
      imageSrc={item.imageSrc}></Item>
  );

  const renderListOfItems = ({item}) => (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        backgroundColor: colors.offwhite,
        justifyContent: 'space-between',
      }}>
      <Text style={styles.tableItemsSelected}>{item.title}</Text>
      <Text style={styles.tableQuantity}>{item.qty}</Text>
      <TouchableOpacity onPress={deleteItem} style={styles.deleteButton}>
        <Image source={require(DeleteIcon)} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <EmptyScreen
        heading=" Donations for Educational Institutes"
        navigation={navigation}
      />
      <SafeAreaView>
        <FlatList
          numColumns={2}
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
        <View style={styles.tableHeader}>
          <Text style={styles.tableHeaderText}>Items Selected</Text>
          <Text style={styles.tableHeaderText}>Quantity</Text>
        </View>
        <FlatList
          // style={styles.tableContents}
          // data={ListOfSelectedItems}
          // renderItem={renderListOfItems}
          // keyExtractor={(item) => item.title}
          // extraData={ListOfSelectedItems}

          style={styles.tableContents}
          data={props.selectedItemsList}
          renderItem={renderListOfItems}
          keyExtractor={(item) => item.title}
          // extraData={useSelector(
          //   (state) =>
          //     state.allReducers.selectedItemsListReducer.selectedItemsList,
          // )}
        />
      </View>
      <View style={styles.confirmButtonLine} />
      <View style={styles.confirmButton}>
        <AppButton
          title="Confirm"
          onPress={() => alert('Confirm Button Tapped')}
        />
      </View>
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
  console.log('in mapDispatchToProps');
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
    top: 20,
    left: 30,
    paddingBottom: 10,
    marginBottom: 8,
    width: '90%',
    backgroundColor: colors.offwhite,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  tableHeader: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingBottom: 5,
  },
  tableHeaderText: {
    top: 2,
    paddingTop: 3,
    fontFamily: 'Montserrat',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 12,
    backgroundColor: colors.offwhite,
    color: '#343B83',
    flex: 1,
    marginLeft: 20,
  },
  tableContents: {
    width: '100%',
    alignSelf: 'center',
    backgroundColor: colors.offwhite,
    marginLeft: 40,
  },

  tableItemsSelected: {
    top: 2,
    paddingTop: 4,
    height: 24,
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 12,
    backgroundColor: colors.offwhite,
    color: '#343B83',
    alignContent: 'center',
    flex: 1,
  },

  tableQuantity: {
    top: 2,
    paddingTop: 4,
    height: 24,
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 12,
    backgroundColor: colors.offwhite,
    color: '#343B83',
    flex: 0.5,
    backgroundColor: colors.offwhite,
  },
  deleteButton: {
    backgroundColor: colors.offwhite,
    marginRight: 40,
    backgroundColor: colors.offwhite,
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
    marginBottom: 15,
    width: '80%',
    alignSelf: 'center',
  },
});

const ITEMSLIST = [
  {
    id: '1',
    title: 'Accessories',
    imageSrc: require('../styling/images/Accessories.png'),
  },
  {
    id: '2',
    title: 'Bags',
    imageSrc: require('../styling/images/Bags.png'),
  },
  {
    id: '3',
    title: 'Transportations',
    imageSrc: require('../styling/images/Transportations.png'),
  },
  {
    id: '4',
    title: 'Copies',
    imageSrc: require('../styling/images/Copies.png'),
  },
];
