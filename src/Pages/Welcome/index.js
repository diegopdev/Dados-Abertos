import React from 'react';
import { darken } from 'polished';
import PropTypes from 'prop-types';
import { globalStyles } from '../../Styles/GlobalStyles';

import logo from '../../assets/img/logo.png';

import {
    BackgroundGradient,
    Container,
    Logo,
    Title,
    Continue,
    ContinueTitle,
} from './styles';

function Welcome({ navigation }) {
    return (
        <BackgroundGradient
            colors={[
                `${globalStyles.verdeEscuro}`,
                `${darken(0.03, globalStyles.verdeEscuro)}`,
                `${darken(0.1, globalStyles.verdeEscuro)}`,
            ]}
        >
            <Container>
                <Logo source={logo} />

                <Title>
                    Os dados da câmara a qualquer hora, ao seu dispor.
                </Title>

                <Continue
                    onPress={() => navigation.navigate('DrawerNavigator')}
                >
                    <ContinueTitle>Continuar</ContinueTitle>
                </Continue>
            </Container>
        </BackgroundGradient>
    );
}

Welcome.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
};

export default Welcome;
