import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import colors from '../styling/colorSchemes/colors';
import React from 'react';
import DonorItem from '../components/DonorItem';
import EmptyScreen from './EmptyScreen';
import AppButton from '../components/AppButton';
import schoolListingApi from '../api/schoolListing';
import itemListingApi from '../api/itemsListing';
import {useEffect} from 'react';
import useApi from '../hooks/useApi';
import {connect} from 'react-redux';
import {addItemToDonateItemsList} from '../actions';
import {deleteItemFromDonateItemsList} from '../actions';
import DonateCartList from '../components/DonateCartList';
import DonorOthersBox from '../components/DonorOthersBox';

const OffTick = '../styling/images/offTick.png';
const OnTick = '../styling/images/onTick.png';
const DeleteIcon = '../styling/images/deleteIcon.png';

// Image components
import imageSrc from '../constants/itemImageSource';

const DonorSchoolDetails = ({navigation}, props) => {
   //var schoolId = '5f9833289b74b966884f600d';
  var schoolId = navigation.state.params.id; 
  console.log(navigation.state.params.id);
  const {data: school, error, loading, request: loadSchoolDetails} = useApi(
    schoolListingApi.getActiveSchoolDetails,
  );

  const {data: itemList, error2, loading2, request: loadItemDetails} = useApi(
    itemListingApi.getAllListedItems,
  );

  
  useEffect(() => {
    loadItemDetails();
  }, []);


  useEffect(() => {
    loadSchoolDetails(schoolId);
  }, []);

  //console.log('props is ' + props);
  const access = new Map();
  for (let i = 0; i < itemList.length; i++){
    access.set(itemList[i]._id, itemList[i].imageURL);
  }


  const renderItem = ({item}) => (
    <DonorItem
      itemName={item.itemName}
      totalUnits={item.quantity}
      metric={item.metric}
      imageSrc={access.get(item.itemID)}
      isSchoolList={false}/>
  );

  return (
    <View style={styles.container}>
      <EmptyScreen heading={school.schoolName} navigation={navigation} />
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
          <>
            <View style={styles.detailContainer}>
              <Text style={styles.subheading}>Address </Text>
              <Text style={styles.content}>
                {/* {school.schoolAddress.addressLine1}{' '}
                {school.schoolAddress.addressLine2} */}
              </Text>
              <Text style={styles.content}>
                {/* {school.schoolAddress.city} {school.schoolAddress.pincode} */}
              </Text>
              <Text style={styles.subheading}>Details </Text>
              {/* <Text style={styles.content}>{school.details.board}</Text>
              <Text style={styles.content}>{school.details.recognition}</Text>
              <Text style={styles.content}>
                {school.details.studentsPerClass}
                {' Students per class'}
              </Text>
              <Text style={styles.subheading}>Infrastructure </Text>
              <Text style={styles.content}>{school.infrastructure}</Text> */}
            </View>

            <SafeAreaView style={{width: '100%'}}>
              <FlatList
                style={styles.listView}
                data={school.items}
                renderItem={renderItem}
                keyExtractor={(item) => item.itemID}
              />
            </SafeAreaView>
          </>
        )}
        <DonorOthersBox />

        <DonateCartList showButton={true} />
        <View style={styles.confirmButtonLine} />
        <View style={styles.confirmButton}>
          <AppButton
            title="Donate"
            onPress={() => navigation.navigate('DonorForm', {schoolId:schoolId})}
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

export default connect(mapStateToProps, mapDispatchToProps)(DonorSchoolDetails);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: colors.offwhite,
  },

  inputContainer: {
    position: 'relative',
    backgroundColor: colors.offwhite,
    borderRadius: 20,
    flexDirection: 'row',
    //  width: '80%',
    marginVertical: 10,
    borderColor: colors.lightgrey,
    borderWidth: 2,
    alignItems: 'center',
  },

  confirmButton: {
    position: 'relative',
    //height: 40,
    width: 200,
    alignSelf: 'center',
  },
  content: {
    fontSize: 15,
    lineHeight: 20,
    color: colors.darkblue,
    marginVertical: 2,
  },
  subheading: {
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 20,
    marginVertical: 2,
    marginTop: 20,
    color: colors.darkblue,
  },
  detailContainer: {
    fontFamily: 'Montserrat',
    width: '100%',
    paddingHorizontal: '10%',
    marginBottom: 20,
  },
  confirmButtonLine: {
    borderBottomColor: colors.lightgrey,
    borderBottomWidth: 2,
    marginVertical: 15,
    width: '80%',
    alignSelf: 'center',
  },

  // style copies from donorItemsList
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
});

// const ITEMSLIST = [
//   {
//     id: '1',
//     title: 'Accessories',
//     metric: 'units',
//     totalUnits: '20',
//     imageSrc: '../styling/images/Accessories.png',
//     //imageSrc: require('../styling/images/Accessories.png'),
//   },
//   {
//     id: '2',
//     title: 'Bags',
//     metric: 'pcs',
//     totalUnits: '250',
//     imageSrc: '../styling/images/Accessories.png',
//     //imageSrc: require('../styling/images/Bags.png'),
//   },
//   {
//     id: '3',
//     title: 'Transportations',
//     metric: 'unit',
//     totalUnits: '2000',
//     imageSrc: '../styling/images/Accessories.png',
//     //imageSrc: require('../styling/images/Transportations.png'),
//   },
//   {
//     id: '4',
//     title: 'Copies',
//     metric: 'pcs',
//     totalUnits: '20000',
//     imageSrc: '../styling/images/Accessories.png',
//     //imageSrc: require('../styling/images/Copies.png'),
//   },
// ];
