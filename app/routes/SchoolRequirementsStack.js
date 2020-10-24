import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SchoolRequirements from '../screens/SchoolRequirements';
import WelcomeScreen from '../screens/WelcomeScreen';
import SchoolDetailsForm from '../screens/SchoolDetailsForm';

const screens = {
  SchoolRequirements: {
    screen: SchoolRequirements,
    navigationOptions: {
      headerShown: false,
    },
  },

  SchoolDetailsForm: {
    screen: SchoolDetailsForm,
    navigationOptions: {
      headerShown: false,
    },
  },
};

const SchoolRequirementsStack = createStackNavigator(screens);

export default SchoolRequirementsStack;
