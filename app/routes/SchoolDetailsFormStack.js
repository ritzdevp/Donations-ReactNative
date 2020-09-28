import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SchoolDetailsForm from '../screens/SchoolDetailsForm';
import WelcomeScreen from '../screens/WelcomeScreen';

const screens = {
  SchoolDetailsForm: {
    screen: SchoolDetailsForm,
    navigationOptions: {
      headerShown: false,
    },
  },
  WelcomeScreen: {
    screen: WelcomeScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
};

const SchoolDetailsFormStack = createStackNavigator(screens);

export default SchoolDetailsFormStack;
