import {StyleSheet, View, Text, Button, ActivityIndicator} from 'react-native';
import colors from '../styling/colorSchemes/colors';
import React from 'react';
import EmptyScreen from './EmptyScreen';
import AppButton from '../components/AppButton';
import TestButton from '../components/TestButton';
import schoolListingApi from '../api/schoolListing';
import react, {useEffect} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {add} from 'react-native-reanimated';

function DonorSchoolDetails({navigation}) {
  var schoolId = navigation.getParam('id');
  const [loading, setLoading] = React.useState(true);
  const [school, updateSchoolDetails] = react.useState('');

  useEffect(() => {
    if (loading) loadSchoolDetails();
  }, []);

  const loadSchoolDetails = async () => {
    const response = await schoolListingApi.getSchoolDetails(schoolId);
    updateSchoolDetails(response.data);
    setLoading(false);
    console.log(school);
  };

  return (
    <View style={styles.container}>
      <EmptyScreen heading={school.schoolName} navigation={navigation} />
      <ActivityIndicator animating={loading} size="large" />
      <View style={styles.detailContainer}>
        <Text style={styles.subheading}>Address </Text>
        <Text style={styles.content}>
          {school.schoolAddress.addressLine2}{' '}
          {school.schoolAddress.addressLine2}
        </Text>
        <Text style={styles.content}>
          {' '}
          {school.schoolAddress.city} {school.schoolAddress.pincode}
        </Text>
        <Text style={styles.subheading}>Details </Text>
        <Text style={styles.content}> {school.details.board}</Text>
        <Text style={styles.content}> {school.details.recognition}</Text>
        <Text style={styles.content}>
          {school.details.studentsPerClass}
          {' Students per class'}
        </Text>
        <Text style={styles.subheading}>Infrastructure </Text>
        <Text style={styles.content}>{school.infrastructure}</Text>
      </View>
      <View style={styles.confirmButton}>
        <AppButton
          title="Donate"
          onPress={() => navigation.navigate('DonorForm', {id})}
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
  content: {
    fontSize: 15,
    lineHeight: 20,
    color: colors.primary,
    marginVertical: 2,
  },
  subheading: {
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 20,
    marginVertical: 5,
    color: colors.primary,
  },
  detailContainer: {
    fontFamily: 'Montserrat',
  },
});

export default DonorSchoolDetails;
