import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList118075Navigator from '../features/NotificationList118075/navigator';
import Settings118074Navigator from '../features/Settings118074/navigator';
import Settings118066Navigator from '../features/Settings118066/navigator';
import UserProfile118064Navigator from '../features/UserProfile118064/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList118075: { screen: NotificationList118075Navigator },
Settings118074: { screen: Settings118074Navigator },
Settings118066: { screen: Settings118066Navigator },
UserProfile118064: { screen: UserProfile118064Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
