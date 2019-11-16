import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

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
            <Text>APP</Text>
        </View>
    );
}

export default App;
