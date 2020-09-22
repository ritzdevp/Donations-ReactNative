import {StyleSheet, View, Text, Button, ActivityIndicator} from 'react-native';
import colors from '../styling/colorSchemes/colors';
import React from 'react';
import EmptyScreen from './EmptyScreen';
import AppButton from '../components/AppButton';
import TestButton from '../components/TestButton';
import schoolListingApi from '../api/schoolListing';
import {useEffect} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import useApi from '../hooks/useApi';

function DonorSchoolDetails({navigation}) {
  var schoolId = navigation.getParam('id');
  const {data: school, error, loading, request: loadSchoolDetails} = useApi(
    schoolListingApi.getSchoolDetails,
  );

  useEffect(() => {
    loadSchoolDetails(schoolId);
  }, []);

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

      {!loading && !error && (
        <View style={styles.detailContainer}>
          <Text style={styles.subheading}>Address </Text>
          <Text style={styles.content}>
            {school.schoolAddress.addressLine1}{' '}
            {school.schoolAddress.addressLine2}
          </Text>
          <Text style={styles.content}>
            {school.schoolAddress.city} {school.schoolAddress.pincode}
          </Text>
          <Text style={styles.subheading}>Details </Text>
          <Text style={styles.content}>{school.details.board}</Text>
          <Text style={styles.content}>{school.details.recognition}</Text>
          <Text style={styles.content}>
            {school.details.studentsPerClass}
            {' Students per class'}
          </Text>
          <Text style={styles.subheading}>Infrastructure </Text>
          <Text style={styles.content}>{school.infrastructure}</Text>
        </View>
      )}
      <View style={styles.confirmButton}>
        <AppButton
          title="Donate"
          onPress={() => navigation.navigate('DonorForm', {schoolId})}
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
});

export default DonorSchoolDetails;
