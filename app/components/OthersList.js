import React from 'react';
import {StyleSheet, View, Text, SafeAreaView, FlatList} from 'react-native';
import colors from '../styling/colorSchemes/colors';

const OthersList = () => {
  const renderOthersList = ({item}) => (
    <Item title={item.title} schoolName={item.schoolName} />
  );
  const Item = ({schoolName, title}) => (
    <View style={styles.othersItem}>
      <Text style={styles.itemName}>{schoolName}</Text>
      <Text style={styles.text}>{title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.othersList}>
      <FlatList
        style={styles.listView}
        data={OTHER_ITEMS}
        renderItem={renderOthersList}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  othersList: {
    width: '80%',
    alignSelf: 'center',
    marginVertical: 20,
  },
  othersItem: {
    flexDirection: 'column',
    marginBottom: 5,
  },
  text: {
    fontFamily: 'Montserrat',
    color: colors.darkblue,
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 15,
    fontFamily: 'Montserrat',
    color: colors.darkblue,
  },
});

export default OthersList;

const OTHER_ITEMS = [
  {
    id: '1',
    schoolName: 'Laxman Public School',
    title: 'Outdoor Sports Accessories',
    totalUnits: '20',
  },
  {
    id: '2',
    schoolName: 'Balvantray Vidya Bhawan',
    title: 'Needs donation for Ladies Toilet re-construction',
    totalUnits: '250',
  },
  {
    id: '3',
    schoolName: 'Vidya Niketan',
    title: 'Swimming Pool Constructions',
    totalUnits: '2000',
  },
  {
    id: '4',
    schoolName: 'Ball Bharti School',
    title: 'Auditorium Equipments',
    totalUnits: '20000',
  },
];
