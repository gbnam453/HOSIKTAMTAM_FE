// src/screens/SearchScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SearchScreen = ({ navigation }) => (
    <View style={styles.container}>
        <Text style={styles.title}>SearchScreen</Text>
        <Button title="Go to List" onPress={() => navigation.navigate('DetailScreen')} />
    </View>
);

export default SearchScreen;

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
    title: { fontSize: 24, marginBottom: 20 },
});
