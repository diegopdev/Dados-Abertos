import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { Dimensions } from 'react-native';
import { globalStyles } from '../../Styles/GlobalStyles';

const { width } = Dimensions.get('window');

export const BackgroundGradient = styled(LinearGradient)`
    flex: 1;
    padding: 30px;
`;

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: space-around;
`;

export const Logo = styled.Image``;

export const Title = styled.Text`
    font-size: 36px;
    color: ${globalStyles.verdeClaro};
`;

export const Continue = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    background: ${globalStyles.azul};
    width: ${(width / 100) * 80};
    height: 50px;
    border-radius: 5px;
`;

export const ContinueTitle = styled.Text`
    color: ${globalStyles.branco};
    font-size: 24px;
`;
