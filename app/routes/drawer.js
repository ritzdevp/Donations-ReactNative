import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';

import WelcomeScreenStack from './WelcomeScreenStack';
import AboutStack from './AboutStack';

const RootDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: WelcomeScreenStack,
    },
    About: {
      screen: AboutStack,
    },
  },
  {
    drawerPosition: 'right',
    drawerWidth: 150,
    drawerType: 'front',
  },
);

export default createAppContainer(RootDrawerNavigator);
