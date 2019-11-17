import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { globalStyles } from '../../Styles/GlobalStyles';

export const Container = styled.View`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    background: ${globalStyles.verdeEscuro};
    padding: ${Platform.OS === 'ios' ? '50px 0 20px 20px' : '20px'};
`;

export const ButtonMenu = styled.TouchableWithoutFeedback``;
