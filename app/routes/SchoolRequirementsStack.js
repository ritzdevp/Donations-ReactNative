import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SchoolRequirements from '../screens/SchoolRequirements';

const screens = {
  SchoolRequirements: {
    screen: SchoolRequirements,
    navigationOptions: {
      headerShown: false,
    },
  },
};

const SchoolRequirementsStack = createStackNavigator(screens);

export default SchoolRequirementsStack;
