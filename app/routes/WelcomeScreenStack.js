import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import WelcomeScreen from '../screens/WelcomeScreen';
import SchoolRequirements from '../screens/SchoolRequirements';
import DonorSchoolList from '../screens/DonorSchoolList';

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
  DonorSchoolList: {
    screen: DonorSchoolList,
    navigationOptions: {
      headerShown: false,
    },
  },
};

const WelcomeScreenStack = createStackNavigator(screens);

export default createAppContainer(WelcomeScreenStack);
