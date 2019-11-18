import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Alert, ActivityIndicator } from 'react-native';
import { DeputadoList } from './styles';

import api from '../../../config/server/api';

import SideBar from '../../../Components/sideBar';
import DeputadoItem from '../../../Components/DeputadoItem/index';
import { globalStyles } from '../../../Styles/GlobalStyles';

class DeputadosHome extends Component {
    state = {
        deputados: [],
        pagina: 1,
        loading: true,
        refreshing: false,
    };

    static navigationOptions = ({ navigation }) => ({
        header: <SideBar action={() => navigation.toggleDrawer()} />,
    });

    static propTypes = {
        navigation: PropTypes.shape({
            navigate: PropTypes.func,
        }).isRequired,
    };

    async componentDidMount() {
        const { pagina } = this.state;
        this.getDeputados(pagina);
        this.setState({ loading: false });
    }

    getDeputados = async pagina => {
        const { deputados } = this.state;
        try {
            const response = await api.get(
                'deputados?ordem=ASC&ordenarPor=nome',
                {
                    params: {
                        pagina,
                        itens: 20,
                    },
                }
            );

            this.setState({
                deputados:
                    pagina >= 2
                        ? [...deputados, ...response.data.dados]
                        : response.data.dados,
            });
        } catch (error) {
            Alert.alert('Erro ao carregar Lista de deputados');
        }
    };

    loadMore = async () => {
        const { pagina } = this.state;
        this.getDeputados(pagina + 1);
        await this.setState({ pagina: pagina + 1 });
    };

    refreshList = async () => {
        await this.setState({ pagina: 1, loading: true });
        const { pagina } = this.state;
        this.getDeputados(pagina);
        this.setState({ loading: false });
    };

    // details = id => {
    //     console.tron.log(id);
    //     // const { navigation } = this.props;
    //     this.props.navigation.navigate('DeputadosDetalhes');
    // };

    render() {
        const { navigation } = this.props;
        const { deputados, loading, refreshing } = this.state;

        return (
            <>
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
                    <DeputadoList
                        onEndReachedThreshold={0.2}
                        onEndReached={this.loadMore}
                        onRefresh={this.refreshList}
                        refreshing={refreshing}
                        showsVerticalScrollIndicator={false}
                        data={deputados}
                        keyExtractor={deputado => String(deputado.id)}
                        renderItem={deputado => (
                            <DeputadoItem
                                data={deputado}
                                action={() =>
                                    navigation.navigate('DeputadosDetalhes', {
                                        id: deputado.item.id,
                                    })
                                }
                            />
                        )}
                    />
                )}
            </>
        );
    }
}

export default DeputadosHome;
