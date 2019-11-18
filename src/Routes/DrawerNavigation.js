import React from 'react';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import {
    ScrollView,
    SafeAreaView,
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { globalStyles } from '../Styles/GlobalStyles';
import logo from '../assets/img/logo.png';

import Home from '../Pages/Home/index';
import { StackDeputados } from './StackNavigation';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    circle: {
        height: 40,
        width: 40,
        borderRadius: 20,
        borderWidth: 1,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: `${globalStyles.verdeClaro}`,
    },
});

const CustomDrawerContentComponent = props => (
    <ScrollView>
        <SafeAreaView
            style={styles.container}
            forceInset={{ top: 'always', horizontal: 'never' }}
        >
            <View style={styles.containerImage}>
                <Image source={logo} />
                <TouchableOpacity
                    style={styles.circle}
                    onPress={() => props.navigation.navigate('Welcome')}
                >
                    <Icon
                        name="backspace"
                        size={14}
                        color={globalStyles.branco}
                    />
                </TouchableOpacity>
            </View>

            <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
);

CustomDrawerContentComponent.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
};

const DrawerNavigator = createDrawerNavigator(
    {
        Home,
        Deputados: {
            screen: StackDeputados,
        },
    },
    {
        drawerBackgroundColor: `${globalStyles.verdeEscuro}`,
        contentComponent: CustomDrawerContentComponent,
        drawerType: 'slide',
        keyboardDismissMode: 'on-drag',
        initialRouteName: 'Home',
        contentOptions: {
            activeTintColor: `${globalStyles.branco}`,
            activeBackgroundColor: `${globalStyles.verdeClaro}`,
        },
    }
);

export default DrawerNavigator;
