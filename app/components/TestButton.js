import * as React from 'react';
import {Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const TestButton = () => {
  navigation = useNavigation();

  return (
    <>
      <Button
        title={'Go to Home'}
        onPress={() => navigation.navigate('WelcomeScreen')}
      />
    </>
  );
};

export default TestButton;
