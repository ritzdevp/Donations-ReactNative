import {createDrawerNavigator} from 'react-navigation-drawer';
import {creatAppContainer, createAppContainer} from 'react-navigation';
import WelcomeScreenStack from './WelcomeScreenStack';
import CustomDrawerContentComponent from './CustomizedDrawer';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const RootDrawerNavigator = createDrawerNavigator(
  {
    WelcomeScreen: {
      screen: WelcomeScreenStack,
    },
  },
  {
    drawerPosition: 'right',
    drawerWidth: 150,
    drawerType: 'front',
    drawerLockMode: 'locked-open',
    //contentComponent: CustomDrawerContentComponent,
  },
);

// const DrawerNavigatorConfig = {};

export default createAppContainer(RootDrawerNavigator);
