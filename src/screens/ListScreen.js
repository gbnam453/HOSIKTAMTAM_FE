// src/screens/ListScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ListScreen = ({ navigation }) => (
    <View style={styles.container}>
        <Text style={styles.title}>ListScreen</Text>
        <Button title="Go to Detail" onPress={() => navigation.navigate('DetailScreen')} />
    </View>
);

export default ListScreen;

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
    title: { fontSize: 24, marginBottom: 20 },
});
