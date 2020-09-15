import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import WelcomeScreen from '../screens/WelcomeScreen';
import SchoolRequirements from '../screens/SchoolRequirements';
import DonorSchoolList from '../screens/DonorSchoolList';
import DonorSchoolDetails from '../screens/DonorSchoolDetails';
import DonorDetailsForm from '../screens/DonorDetailsForm';
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
  DonorSchoolList: {
    screen: DonorSchoolList,
    navigationOptions: {
      headerShown: false,
    },
  },
  SchoolDetails: {
    screen: DonorSchoolDetails,
    navigationOptions: {
      headerShown: false,
    },
  },
  DonorForm: {
    screen: DonorDetailsForm,
    navigationOptions: {
      headerShown: false,
    },
  },

  SchoolForm: {
    screen: SchoolDetailsForm,
    navigationOptions: {
      headerShown: false,
    },
  },
};

const WelcomeScreenStack = createStackNavigator(screens);

export default createAppContainer(WelcomeScreenStack);
