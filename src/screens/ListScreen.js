// src/screens/ListScreen.js
import React from 'react';
import {
    View, Text, FlatList, StyleSheet,
    SafeAreaView, TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MenuBox from '../components/ListScreen/MenuBox';

const data = [
    {
        id: '1',
        name: '진보',
        category: '면/밥',
        image: { uri: 'https://upload.wikimedia.org/wikipedia/commons/6/65/Food_icon.png' }
    },
];

export default function App() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.header}>{'<'} 면</Text>
            </TouchableOpacity>

            <FlatList
                data={data}
                renderItem={({ item }) => <MenuBox item={item} />}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
    },
    header: {
        fontSize: 26,
        fontWeight: 'bold',
        marginVertical: 20,
    },
});
