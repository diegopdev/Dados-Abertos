import React from 'react';
import PropTypes from 'prop-types';

import {
    Container,
    ContainerContent,
    Foto,
    ContainerDescription,
    Title,
    Description,
} from './styles';

function DeputadoItem({ data, action }) {
    const { nome, siglaPartido, siglaUf, urlFoto } = data.item;

    return (
        <Container onPress={action}>
            <ContainerContent>
                <Foto source={{ uri: urlFoto }} />
                <ContainerDescription>
                    <Title>
                        Nome: <Description>{nome}</Description>
                    </Title>
                    <Title>
                        Partido: <Description>{siglaPartido}</Description>
                    </Title>
                    <Title>
                        UF: <Description>{siglaUf}</Description>
                    </Title>
                </ContainerDescription>
            </ContainerContent>
        </Container>
    );
}

DeputadoItem.propType = {
    data: PropTypes.shape({
        item: PropTypes.shape({
            nome: PropTypes.string,
            siglaPartido: PropTypes.string,
            siglaUf: PropTypes.string,
            urlFoto: PropTypes.string,
        }),
    }).isRequired,
};

export default DeputadoItem;
