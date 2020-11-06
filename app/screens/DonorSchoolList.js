import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import colors from '../styling/colorSchemes/colors';
import React, {useEffect} from 'react';
import EmptyScreen from './EmptyScreen';
import schoolListingApi from '../api/schoolListing';
import AppButton from '../components/AppButton';
import TabSwitch from '../components/TabSwitch';
import useApi from '../hooks/useApi';

const searchIcon = require('../styling/Icons/Search-40px.png');
const sortIcon = require('../styling/Icons/chevron-down.png');

function DonorSchoolList({navigation}) {
  const [searchSchool, onSearchChange] = React.useState('');
  const [myList, updateList] = React.useState('');
  const [fullList, updateFullList] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const {data, error, loading: apiLoading, request: loadSchoolListing} = useApi(
    schoolListingApi.getAllActiveSchools,
  );

  // importing data from backend
  useEffect(() => {
    updateSearchListing();
  }, []);

  const updateSearchListing = async () => {
    setLoading(true);
    const SCHOOL_LIST = await loadSchoolListing();
    updateList(SCHOOL_LIST);
    updateFullList(SCHOOL_LIST);
    // console.log(SCHOOL_LIST);
    setLoading(false);
  };

  const sortByName = () => {
    let sortedList = [...fullList];
    sortedList.sort((a, b) => {
      let fa = a.schoolName.toLowerCase();
      let fb = b.schoolName.toLowerCase();
      return fa < fb ? -1 : 1;
    });
    updateList(sortedList);
    updateFullList(sortedList);
    //console.log(myList);
  };
  const Item = ({schoolName, city, id}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('SchoolDetails', {id: id})}
      style={styles.item}>
      <View>
        <Text style={styles.title}>{schoolName}</Text>
        <Text style={styles.address}>{city}</Text>
      </View>
    </TouchableOpacity>
  );

  function updateInputAndList(text) {
    const textClean = text.replace(/[^a-zA-Z ]/g, "");
    console.log(textClean);
    var reg = new RegExp(textClean, 'i');
    updateList(fullList.filter((item) => reg.test(item.schoolName)));
    onSearchChange(text);
  }

  const renderItem = ({item}) => (
    <Item
      schoolName={item.schoolName}
      //city={item.schoolAddress.city}
      id={item.schoolID}
    />
  );

  return (
    <View style={styles.container}>
      <EmptyScreen navigation={navigation} />
      {error && (
        <>
          <Text style={styles.title}> Couldn't retrieve the listing </Text>
          <AppButton
            title="Retry"
            style={{width: 200}}
            onPress={loadSchoolListing}
          />
        </>
      )}

      <View style={styles.switchtabs}>
        <TabSwitch
          title="Items List"
          onPress={() => navigation.navigate('DonorItemList')}
        />
        <TabSwitch
          title="Schools List"
          selectedStatus="true"
          //onPress={() => navigation.navigate('DonorSchoolList')}
        />
      </View>

      <View style={styles.inputContainer}>
        <Image style={styles.searchIcon} source={searchIcon} />
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => updateInputAndList(text)}
          value={searchSchool}
          placeholder="Search school name"
        />
      </View>
      <View style={styles.sortBox}>
        <TouchableOpacity onPress={sortByName}>
          <Image style={styles.sortIcon} source={sortIcon} />
        </TouchableOpacity>
      </View>
      {loading && (
        <ActivityIndicator
          animating={loading}
          size="large"
          color={colors.primary}
        />
      )}
      <SafeAreaView style={styles.listContainer}>
        <FlatList
          data={myList}
          renderItem={renderItem}
          keyExtractor={(item) => item.schoolID}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.offwhite,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  inputContainer: {
    position: 'relative',
    backgroundColor: colors.offwhite,
    borderRadius: 20,
    flexDirection: 'row',
    width: '80%',
    marginVertical: 10,
    borderColor: colors.lightgrey,
    borderWidth: 2,
    alignItems: 'center',
  },
  textInput: {
    fontSize: 15,
    fontFamily: 'Montserrat',
  },
  title: {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 20,
    color: colors.darkblue,
  },
  address: {
    fontFamily: 'Montserrat',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 20,
    color: colors.darkblue,
  },
  item: {
    paddingVertical: 10,
    borderBottomColor: colors.lightgrey,
    borderBottomWidth: 2,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  listContainer: {
    marginVertical: 20,
    width: '80%',
    borderTopColor: colors.lightgrey,
    borderTopWidth: 2,
  },
  sortBox: {
    width: '75%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  sortIcon: {
    height: 10,
    width: 10,
    resizeMode: 'cover',
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
  },
});

export default DonorSchoolList;

/*const SCHOOL_LIST = [
  {
    id: '1',
    title: 'Poornapragathi Vidya Mandir Association',
    address: 'Dooravani Nagar, Bangalore',
  },
  {
    id: '2',
    title: 'Seema Public School',
    address: 'Arya Nagar, Bangalore',
  },
  {
    id: '3',
    title: 'Delhi Public School',
    address: 'RK Puram, New Delhi',
  },
  {
    id: '4',
    title: 'Govt. Boys Sr. Secondary School',
    address: 'Lajpat Nagar, New Delhi',
  },
  {
    id: '5',
    title: 'Balvantray Mehta Vidya Bhawan',
    address: 'Greater Kailash, New Delhi',
  },
  {
    id: '6',
    title: 'Queens School',
    address: 'Indore',
  },
  {
    id: '7',
    title: 'Poornapragathi Vidya Mandir Association',
    address: 'Dooravani Nagar, Bangalore',
  },
  {
    id: '8',
    title: 'Seema Public School',
    address: 'Arya Nagar, Bangalore',
  },
  {
    id: '9',
    title: 'Delhi Public School',
    address: 'RK Puram, New Delhi',
  },
  {
    id: '10',
    title: 'Govt. Boys Sr. Secondary School',
    address: 'Lajpat Nagar, New Delhi',
  },
  {
    id: '11',
    title: 'Balvantray Mehta Vidya Bhawan',
    address: 'Greater Kailash, New Delhi',
  },
  {
    id: '12',
    title: 'Queens School',
    address: 'Indore',
  },
];*/
