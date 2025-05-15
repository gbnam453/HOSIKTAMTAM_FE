// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => (
    <View style={styles.container}>
        <Text style={styles.title}>SearchScreen</Text>
        <Button title="Go to Search" onPress={() => navigation.navigate('SearchScreen')} />
        <Text style={styles.title}>ListScreen</Text>
        <Button title="Go to Search" onPress={() => navigation.navigate('ListScreen')} />
    </View>
);

export default HomeScreen;

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FAFAFA' },
    title: { fontSize: 24, fontWeight: '600', marginBottom: 20 },
});
