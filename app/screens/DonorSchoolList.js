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
import useApi from '../hooks/useApi';
import {set} from 'react-native-reanimated';

function DonorSchoolList({navigation}) {
  const [searchSchool, onSearchChange] = React.useState('');
  const [myList, updateList] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const {
    data: fullList,
    error,
    loading: apiLoading,
    request: loadSchoolListing,
  } = useApi(schoolListingApi.getAllSchools);

  // importing data from backend
  useEffect(() => {
    updateSearchListing();
  }, []);

  const updateSearchListing = async () => {
    setLoading(true);
    const SCHOOL_LIST = await loadSchoolListing();
    updateList(SCHOOL_LIST);
    // console.log(SCHOOL_LIST);
    setLoading(false);
  };

  const Item = ({schoolName, city, id}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('SchoolDetails', {id})}
      style={styles.item}>
      <View>
        <Text style={styles.title}>{schoolName}</Text>
        <Text style={styles.address}>{city}</Text>
      </View>
    </TouchableOpacity>
  );

  function updateInputAndList(text) {
    var reg = new RegExp(text, 'i');
    updateList(fullList.filter((item) => reg.test(item.schoolName)));
    onSearchChange(text);
  }

  const renderItem = ({item}) => (
    <Item
      schoolName={item.schoolName}
      city={item.schoolAddress.city}
      id={item.schoolId}
    />
  );

  return (
    <View style={styles.container}>
      <EmptyScreen
        heading="List of Institutes need help"
        navigation={navigation}
      />
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

      <View style={styles.inputContainer}>
        <Image
          style={styles.searchIcon}
          source={require('../styling/Icons/Search-40px.png')}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => updateInputAndList(text)}
          value={searchSchool}
          placeholder="Search school name"
        />
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
          keyExtractor={(item) => item.schoolId}
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
    paddingVertical: 10,
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
