import {StyleSheet, View, Text, Button} from 'react-native';
import colors from '../styling/colorSchemes/colors';
import React from 'react';
import EmptyScreen from './EmptyScreen';
import AppButton from '../components/AppButton';
import TestButton from '../components/TestButton';

function DonorSchoolDetails({navigation}) {
  var school = navigation.getParam('item');
  return (
    <View style={styles.container}>
      <EmptyScreen heading={school.title} navigation={navigation} />
      <Text>{school.address}</Text>
      <View style={styles.confirmButton}>
        <AppButton
          title="Donate"
          onPress={() => navigation.navigate('DonorForm', {school})}
        />
      </View>
      {/* <TestButton /> */}
      {/* <Button
        title={'Go to Home'}
        onPress={() => navigation.navigate('WelcomeScreen')}></Button> */}
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
