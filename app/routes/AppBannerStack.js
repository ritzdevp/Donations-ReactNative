import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import WelcomeScreen from '../screens/WelcomeScreen';

const screens = {
  HomeScreen: {
    screen: WelcomeScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
};

const AppBannerStack = createStackNavigator(screens);

export default createAppContainer(AppBannerStack);
