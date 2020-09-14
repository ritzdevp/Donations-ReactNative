import {StyleSheet, View, Text} from 'react-native';
import colors from '../styling/colorSchemes/colors';
import React, {useEffect} from 'react';
import EmptyScreen from './EmptyScreen';
import {TextInput, Image, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native';

const Item = ({title, address, id}) => (
  <View style={styles.item}>
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.address}>{address}</Text>
    </View>
    <TouchableOpacity onPress={() => alert('id clicked : ' + id)}>
      <Image source={require('../styling/Icons/info.png')} />
    </TouchableOpacity>
  </View>
);

function DonorSchoolList() {
  const [searchSchool, onSearchChange] = React.useState('');
  const [myList, updateList] = React.useState(SCHOOL_LIST);

  function updateInputAndList(text) {
    var reg = new RegExp(text, 'i');
    updateList(SCHOOL_LIST.filter((item) => reg.test(item.title)));
    onSearchChange(text);
  }

  const renderItem = ({item}) => (
    <Item title={item.title} address={item.address} id={item.id} />
  );

  return (
    <View style={styles.container}>
      <EmptyScreen heading="List of Institutes need" />
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
      <SafeAreaView style={styles.listContainer}>
        <FlatList
          data={myList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
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

const infoIcon = '../styling/Icons/info.png';
const SCHOOL_LIST = [
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
];
