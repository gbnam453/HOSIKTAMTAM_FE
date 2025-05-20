// src/components/ListScreen/MenuBox.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function MenuBox({ item }) {
    if (!item) return null;

    return (
        <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.infoContainer}>
                <View style={styles.titleRow}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.category}>{item.category}</Text>
                </View>
                <Text style={styles.info}>🕒 영업시간 : 00:00 ~ 00:00</Text>
                <Text style={styles.info}>❌ 휴무일 : 토, 일</Text>
                <Text style={styles.info}>📞 전화번호 : 000-000-000</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 12,
        backgroundColor: '#eee',
    },
    infoContainer: {
        flex: 1,
        marginLeft: 12,
        justifyContent: 'center',
    },
    titleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    category: {
        fontSize: 14,
        color: '#999',
    },
    info: {
        color: '#666',
        marginTop: 2,
    },
});
