// src/screens/DetailScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DetailScreen = ({ navigation }) => (
    <View style={styles.container}>
        <Text style={styles.title}>DetailScreen</Text>
        <Button title="Back to Home" onPress={() => navigation.navigate('HomeScreen')} />
    </View>
);

export default DetailScreen;

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
    title: { fontSize: 24, marginBottom: 20 },
});
