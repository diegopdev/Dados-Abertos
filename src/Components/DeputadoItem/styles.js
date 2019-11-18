import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    /* flex: 1; */
`;

export const ContainerContent = styled.View`
    flex-direction: row;
    align-items: center;
    margin: 5px;
    border: 1px solid #eee;
`;

export const Foto = styled.Image`
    width: 100px;
    height: 100px;
    background-color: #eee;
`;

export const ContainerDescription = styled.View`
    margin-left: 10px;
`;

export const Title = styled.Text`
    font-weight: bold;
`;

export const Description = styled.Text`
    font-weight: 100;
`;
