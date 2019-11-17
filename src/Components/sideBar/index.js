import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { globalStyles } from '../../Styles/GlobalStyles';
import { Container, ButtonMenu } from './styles';

function SideBar({ action }) {
    return (
        <Container>
            <ButtonMenu onPress={action}>
                <Icon name="reorder" size={25} color={globalStyles.branco} />
            </ButtonMenu>
        </Container>
    );
}

SideBar.propTypes = {
    action: PropTypes.func.isRequired,
};

export default SideBar;
