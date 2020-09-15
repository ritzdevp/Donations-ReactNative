import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList, Image} from 'react-native';
import Item from '../components/Item';
import AppButton from '../components/AppButton';
import colors from '../styling/colorSchemes/colors';
import {color} from 'react-native-reanimated';
import {TouchableOpacity} from 'react-native-gesture-handler';
const DonorHands = '../styling/images/donor-logo-1.png';
const OffTick = '../styling/images/offTick.png';
const OnTick = '../styling/images/onTick.png';
const DeleteIcon = '../styling/images/deleteIcon.png';

export default function SchoolRequirements() {
  const [ListOfSelectedItems, setListOfSelectedItems] = useState([]);

  const putItem = (qty, title) => {
    console.log('putItem called!');

    let newListOfSelectedItems = [...ListOfSelectedItems];
    let objIndex = newListOfSelectedItems.findIndex(
      (obj) => obj.title == title,
    );
    if (objIndex < 0) {
      newListOfSelectedItems.push({
        title: title,
        qty: qty,
      });
      console.log(newListOfSelectedItems);
      console.log(ListOfSelectedItems);
    } else {
      newListOfSelectedItems[objIndex].qty = qty;
    }
    setListOfSelectedItems(newListOfSelectedItems);
  };

  const deleteItem = (title) => {
    const tempArr = [...ListOfSelectedItems];
    console.log('title is ');
    console.log(title);
    const index = tempArr.findIndex((obj) => obj.title != title);
    console.log('index is');
    console.log(index);
    tempArr.splice(index, 1);
    setListOfSelectedItems(tempArr);
    console.log('deleted');
    console.log(tempArr);
  };

  const renderItem = ({item}) => (
    <Item
      itemName={item.title}
      //itemQty={item.qty}
      imageSrc={item.imageSrc}
      putItem={putItem}></Item>
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
        keyExtractor={(item) => item.title}
      />

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
          style={styles.tableContents}
          data={ListOfSelectedItems}
          renderItem={renderListOfItems}
          keyExtractor={(item) => item.title}
          extraData={ListOfSelectedItems}
        />
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
    flex: 1,
    paddingBottom: 360,
    backgroundColor: colors.offwhite,
    marginTop: 180,
    alignSelf: 'center',
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
    top: 4,
    flexDirection: 'row',
    height: 20,
    width: 88,
    left: 50,
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
    top: 10,
    height: 100,
    width: '100%',
    backgroundColor: colors.offwhite,
    marginLeft: 7,
  },

  tableItemsSelected: {
    top: 2,
    paddingTop: 4,
    height: 24,
    left: 10,
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
    flex: 1,
    top: 20,
    alignSelf: 'center',
    height: 60,
    width: 300,
    bottom: 24,
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
