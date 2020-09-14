import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import DonorSchoolList from '../screens/DonorSchoolList';

const screens = {
  DonorSchoolList: {
    screen: DonorSchoolList,
    navigationOptions: {
      headerShown: false,
    },
  },
};

const DonorSchoolListStack = createStackNavigator(screens);

export default createAppContainer(DonorSchoolListStack);
