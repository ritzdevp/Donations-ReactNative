import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

import {connect} from 'react-redux';
import {addItemToDonateItemsList} from '../actions';
import {deleteItemFromDonateItemsList} from '../actions';
import Collapsible from 'react-native-collapsible';
import itemListingApi from '../api/itemsListing';
import AppButton from '../components/AppButton';

import colors from '../styling/colorSchemes/colors';

const OffTick = '../styling/images/offTick.png';
const OnTick = '../styling/images/onTick.png';

const DonorItem = (props) => {
  const [selected, setSelected] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [loadList, setLoadList] = useState(false);
  const {
    data: schoolsPerItem,
    error,
    loading,
    request: getSchoolsPerItemByID,
  } = useApi(itemListingApi.getSchoolsPerItemByID);

  // useEffect(() => {
  //   if (props.isSchoolList && selected) {

  //     setLoadList(true);
  //   }
  // }, []);

  const onPress = () => {
    setSelected(!selected);
    props.deleteItem(props.itemName);
    setQuantity(0);
    if (props.isSchoolList && !loadList) getSchoolsPerItemByID(props.id);
    setLoadList(true);
  };

  const renderSchool = ({item}) => (
    <Item
      schoolName={item.schoolName}
      city={item.city}
      reqUnits={props.isSchoolList? item.requiredQuantity : item.quantity}
      id={item.schoolID}
      
    />
  );
  const Item = ({schoolName, city, reqUnits, id}) => (
    <View style={styles.schoolItem}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('SchoolDetails', {id: id})}>
          <Text style={styles.title}>{schoolName}</Text>
        </TouchableOpacity>
        <Text style={styles.text}>
          {', '}
          {city}
        </Text>
      </View>
      <Text style={(styles.title, styles.text)}>{reqUnits}</Text>
    </View>
  );
  return (
    <View style={selected ? styles.onTouch : styles.card}>
      <TouchableOpacity
        style={styles.topContainer}
        onPress={onPress}
        underlayColor="none">
        <View style={styles.info}>
          <View style={styles.imageBox}>
            <Image
              style={styles.stretch}
              resizeMode="contain"
              source={{uri:props.imageSrc}}
            />
          </View>
          <Text style={styles.itemName}>{props.itemName}</Text>
          <View style={styles.unitBox}>
            <Text style={styles.totalUnits}>{props.totalUnits}</Text>
            <Text style={styles.metric}>{props.metric}</Text>
          </View>
          <Image
            style={styles.tick}
            source={selected ? require(OnTick) : require(OffTick)}
          />
        </View>
      </TouchableOpacity>
      <Collapsible collapsed={!selected}>
        {props.isSchoolList && !loading && !error && (
          <SafeAreaView style={styles.schoolList}>
            <FlatList
              style={styles.listView}
              data={schoolsPerItem}
              renderItem={renderSchool}
              keyExtractor={(item) => item.schoolID}
            />
          </SafeAreaView>
        )}

        {props.isSchoolList && loading && (
          <SafeAreaView style={styles.schoolList}>
            <ActivityIndicator
              animating={loading}
              size="large"
              color={colors.primary}
            />
          </SafeAreaView>
        )}
        {props.isSchoolList && error && !loading && (
          <SafeAreaView style={styles.error}>
            <Text
              style={(styles.text, {alignSelf: 'center', marginBottom: 10})}>
              Couldn't retrieve the listing
            </Text>
            <View style={{width: 200}}>
              <AppButton
                title="Retry"
                onPress={() => getSchoolsPerItemByID(props.id)}
              />
            </View>
          </SafeAreaView>
        )}

        <TextInput
          style={styles.quantity}
          placeholder="QTY"
          keyboardType="numeric"
          onChangeText={(quantity) => {
            console.log('calling props.addItem...');
            props.addItem(props.itemName, quantity, props.itemID);
            setQuantity(quantity);
          }}
          editable={selected}
        />
      </Collapsible>
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
    addItem: (title, qty, itemID) => dispatch(addItemToDonateItemsList(title, qty, itemID)),
    deleteItem: (title) => dispatch(deleteItemFromDonateItemsList(title)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DonorItem);

const styles = StyleSheet.create({
  card: {
    borderWidth: 2,
    backgroundColor: '#EBEFF2',
    borderColor: '#D2D7DB',
    borderRadius: 20,
    marginTop: 15,
    justifyContent: 'center',
  },
  topContainer: {
    flexDirection: 'row',
    flex: 1,

    height: '100%',
  },
  onTouch: {
    borderWidth: 2,
    backgroundColor: '#EBEFF2',
    borderColor: colors.primary,
    borderRadius: 20,
    justifyContent: 'center',
    marginTop: 15,
  },
  schoolList: {
    height: 120,
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: colors.lightgrey,
  },
  schoolItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: 'Montserrat',
    color: colors.darkblue,
  },
  title: {
    fontFamily: 'Montserrat',
    color: colors.darkblue,
    fontWeight: 'bold',
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 15,
    fontFamily: 'Montserrat',
    color: colors.darkblue,
    width: '35%',
  },
  totalUnits: {
    fontFamily: 'Montserrat',
    color: colors.darkblue,
    fontSize: 30,

    fontWeight: '300',
  },
  metric: {
    fontFamily: 'Montserrat',
    color: colors.darkblue,
    fontSize: 12,
    margin: 2,
    lineHeight: 30,
    fontWeight: '400',
    marginRight: 10,
  },
  unitBox: {
    flexDirection: 'row',
    alignItems: 'baseline',
    width: '35%',
    justifyContent: 'flex-end',
  },
  quantity: {
    height: 35,
    width: 100,
    backgroundColor: '#EBEFF2',
    borderWidth: 1,
    borderColor: '#9C9A7E',
    borderRadius: 10,
    alignSelf: 'center',
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 15,
    textAlign: 'center',
    marginBottom: 10,
  },
  stretch: {
    width: 70,
    height: 80,
  },
  tick: {
    alignSelf: 'flex-start',
    right: 10,
    top: 7,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  imageBox: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    padding: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const SCHOOLS_PER_ITEM = [
  {
    schoolId: '1',
    schoolName: 'Seema Public School',
    reqUnits: '20',
    city: 'Banglore',
  },
  {
    schoolId: '2',
    schoolName: 'Poornapragathi Vidya Mandir',
    reqUnits: '24',
    city: 'Delhi',
  },
  {
    schoolId: '3',
    schoolName: 'Teresa Public School',
    reqUnits: '60',
    city: 'Mumbai',
  },
  {
    schoolId: '4',
    schoolName: 'Tinu Public School',
    reqUnits: '20',
    city: 'Banglore',
  },
  {
    schoolId: '5',
    schoolName: 'Vidya Mandir School',
    reqUnits: '24',
    city: 'Delhi',
  },
  {
    schoolId: '6',
    schoolName: 'Tagore Intl. Public School',
    reqUnits: '60',
    city: 'Mumbai',
  },
];
