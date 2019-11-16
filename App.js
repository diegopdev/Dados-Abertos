import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

function App() {
    return (
        <View style={styles.container}>
            <Icon name="reorder" size={25} />
            <Text>APP </Text>
        </View>
    );
}

export default App;
