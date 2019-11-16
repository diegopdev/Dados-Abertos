import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { WebView } from 'react-native-webview';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
});

function App() {
    return (
        <View style={styles.container}>
            <WebView source={{ uri: 'https://google.com' }} />
            {/* <Icon name="reorder" size={25} />
            <Text>APP </Text> */}
        </View>
    );
}

export default App;
