import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import WelcomeScreen from '../screens/WelcomeScreen';
import SchoolRequirements from '../screens/SchoolRequirements';
import DonorSchoolList from '../screens/DonorSchoolList';
import DonorSchoolDetails from '../screens/DonorSchoolDetails';
import DonorDetailsForm from '../screens/DonorDetailsForm';
import SchoolDetailsForm from '../screens/SchoolDetailsForm';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import WelcomeScreenStack from './WelcomeScreenStack';

const RootDrawerNavigator = createDrawerNavigator(
  {
    WelcomeScreen: {
      screen: WelcomeScreenStack, //This doesn't work. It should be | screen: WelcomeScreen, |
      // TODO: drawer navigation fix
    },
  },
  {
    drawerPosition: 'right',
    drawerWidth: 150,
    drawerType: 'front',
    //contentComponent: CustomDrawerContentComponent,
  },
);

export default createAppContainer(RootDrawerNavigator);
