import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

import {connect} from 'react-redux';
import {addItemToDonateItemsList} from '../actions';
import {deleteItemFromDonateItemsList} from '../actions';

import Collapsible from 'react-native-collapsible';

import colors from '../styling/colorSchemes/colors';

const OffTick = '../styling/images/offTick.png';
const OnTick = '../styling/images/onTick.png';

const DonorItem = (props) => {
  const [selected, setSelected] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const onPress = () => {
    setSelected(!selected);
    props.deleteItem(props.itemName);
  };

  const renderSchool = ({item}) => (
    <Item
      schoolName={item.schoolName}
      city={item.city}
      reqUnits={item.reqUnits}
    />
  );
  const Item = ({schoolName, city, reqUnits}) => (
    <View style={styles.schoolItem}>
      <View style={{flexDirection: 'row'}}>
        <Text style={(styles.title, styles.text)}>{schoolName}</Text>
        <Text style={(styles.city, styles.text)}>
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
              source={props.imageSrc}
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
        {props.isSchoolList && (
          <SafeAreaView style={styles.schoolList}>
            <FlatList
              style={styles.listView}
              data={props.schoolList}
              renderItem={renderSchool}
              keyExtractor={(item) => item.schoolName}
            />
          </SafeAreaView>
        )}
        <TextInput
          style={styles.quantity}
          placeholder="QTY"
          keyboardType="numeric"
          onChangeText={(quantity) => {
            console.log('calling props.addItem...');
            props.addItem(props.itemName, quantity);
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
    addItem: (title, qty) => dispatch(addItemToDonateItemsList(title, qty)),
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
    height: 80,
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
    maxWidth: 70,
    maxHeight: 50,
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
});
