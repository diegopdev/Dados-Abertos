import { createStackNavigator } from 'react-navigation-stack';
import { globalStyles } from '../Styles/GlobalStyles';

import DeputadosHome from '../Pages/Deputados/DeputadosHome/index';
import DeputadosDetalhes from '../Pages/Deputados/DeputadosDetalhes/index';

const config = {
    headerLayoutPreset: 'center',
    headerBackTitleVisible: false,
    initialRouteName: 'DeputadosHome',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: `${globalStyles.verdeEscuro}`,
        },
        headerTintColor: `${globalStyles.branco}`,
    },
};

export const StackDeputados = createStackNavigator(
    {
        DeputadosHome,
        DeputadosDetalhes,
    },
    config
);
