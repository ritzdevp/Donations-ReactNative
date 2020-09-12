import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import WelcomeScreen from '../screens/WelcomeScreen';
import SchoolRequirements from '../screens/SchoolRequirements';
import SchoolDetailsForm from '../screens/SchoolDetailsForm';

const screens = {
  WelcomeScreen: {
    screen: WelcomeScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
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

const WelcomeScreenStack = createStackNavigator(screens);

export default createAppContainer(WelcomeScreenStack);
