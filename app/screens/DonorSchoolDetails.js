import {StyleSheet, View, Text} from 'react-native';
import colors from '../styling/colorSchemes/colors';
import React from 'react';
import EmptyScreen from './EmptyScreen';
import AppButton from '../components/AppButton';

function DonorSchoolDetails({navigation}) {
  var school = navigation.getParam('item');
  return (
    <View style={styles.container}>
      <EmptyScreen heading={school.title} />
      <Text>{school.address}</Text>
      <View style={styles.confirmButton}>
        <AppButton
          title="Submit"
          onPress={() => navigation.navigate('DonorForm', {school})}
        />
      </View>
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
});

export default DonorSchoolDetails;
