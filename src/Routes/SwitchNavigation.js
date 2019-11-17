import { createSwitchNavigator } from 'react-navigation';

import Welcome from '../Pages/Welcome/index';
import DrawerNavigator from './DrawerNavigation';

const switchNavigator = createSwitchNavigator(
    {
        Welcome,
        DrawerNavigator,
    },
    {
        initialRouteName: 'Welcome',
    }
);

export default switchNavigator;
