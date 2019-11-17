import { createAppContainer } from 'react-navigation';

import switchNavigator from './SwitchNavigation';

export const Routes = createAppContainer(switchNavigator);
