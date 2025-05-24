// src/components/ListScreen/MenuBox.js
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

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

const screenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        width: '100%',
        height: screenWidth * 0.4,
        padding: screenWidth * 0.025,
        backgroundColor: '#f9f9f9',
        borderRadius: 12,
        alignItems: 'center',
        marginBottom: screenWidth * 0.04,
    },
    image: {
        width: screenWidth * 0.35,
        height: '90%',
        borderRadius: 12,
        backgroundColor: '#eee',
    },
    infoContainer: {
        flex: 1,
        marginLeft: screenWidth * 0.03,
        justifyContent: 'center',
    },
    titleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    name: {
        fontSize: screenWidth * 0.045,
        fontWeight: 'bold',
    },
    category: {
        fontSize: screenWidth * 0.035,
        color: '#999',
    },
    info: {
        fontSize: screenWidth * 0.035,
        color: '#666',
        marginTop: 2,
    },
});
