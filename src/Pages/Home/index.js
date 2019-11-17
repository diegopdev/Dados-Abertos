import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
import SideBar from '../../Components/sideBar/index';
import { globalStyles } from '../../Styles/GlobalStyles';

class Home extends Component {
    state = {
        loading: true,
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({ loading: false });
        }, 2000);
    }

    static propTypes = {
        navigation: PropTypes.shape({
            toggleDrawer: PropTypes.func,
        }).isRequired,
    };

    render() {
        const { navigation } = this.props;
        const { loading } = this.state;
        return (
            <>
                <SideBar action={() => navigation.toggleDrawer()} />
                {loading ? (
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <ActivityIndicator
                            size="large"
                            color={globalStyles.verdeEscuro}
                        />
                    </View>
                ) : (
                    <View style={{ flex: 1 }}>
                        <WebView
                            source={{
                                uri: 'https://dadosabertos.camara.leg.br/',
                            }}
                        />
                    </View>
                )}
            </>
        );
    }
}

export default Home;
