// No Current use

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import DonorDetailsForm from '../screens/DonorDetailsForm';
import DonorSchoolDetails from '../screens/DonorSchoolDetails';
import DonorSchoolList from '../screens/DonorSchoolList';

const screens = {
  SchoolList: {
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
};

const DonorStack = createStackNavigator(screens);

export default DonorStack;
