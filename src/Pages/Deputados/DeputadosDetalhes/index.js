import React, { Component } from 'react';
import { View, Text } from 'react-native';

import api from '../../../config/server/api';

import { Container, ContainerFoto, Foto, ContainerContent } from './styles';
import { Title, Description } from '../../../Components/DeputadoItem/styles';

class DeputadosDetalhes extends Component {
    state = {
        details: [],
        ultimoStatus: [],
    };

    async componentDidMount() {
        const { navigation } = this.props;
        const id = navigation.getParam('id');
        const response = await api.get(`deputados/${id}`);
        this.setState({
            details: response.data.dados,
            ultimoStatus: response.data.dados.ultimoStatus,
        });
    }

    render() {
        const { details, ultimoStatus } = this.state;

        console.tron.log(details);
        return (
            <Container>
                <ContainerFoto>
                    <Foto source={{ uri: ultimoStatus.urlFoto }} />
                    <ContainerContent>
                        <Title>
                            Nome:
                            <Description>
                                {` ${details.nomeCivil}`}{' '}
                            </Description>
                        </Title>

                        <Title>
                            Partido:
                            <Description>
                                {` ${ultimoStatus.siglaPartido}  ${ultimoStatus.idLegislatura} ${ultimoStatus.siglaUf}`}
                            </Description>
                        </Title>
                    </ContainerContent>
                </ContainerFoto>
            </Container>
        );
    }
}

export default DeputadosDetalhes;
