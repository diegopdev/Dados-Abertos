import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';

import SideBar from '../../../Components/sideBar';

class DeputadosHome extends Component {
    state = {};

    static navigationOptions = ({ navigation }) => ({
        header: <SideBar action={() => navigation.toggleDrawer()} />,
    });

    static propTypes = {
        navigation: PropTypes.shape({
            navigate: PropTypes.func,
        }).isRequired,
    };

    render() {
        // const { navigation } = this.props;
        return (
            <TouchableOpacity onPress={() => {}}>
                <Text>DeputadosHome</Text>
            </TouchableOpacity>
        );
    }
}

export default DeputadosHome;
