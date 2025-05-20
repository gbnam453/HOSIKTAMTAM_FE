// src/components/HomeScreen/SquareButton.js
import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import { subtitle12Medium14 } from '../../styles/textStyles';

const SquareButton = ({ iconSource, label, size = 60, onPress }) => {
    // 아이콘 크기: 버튼 크기의 40%
    const iconSize = size * 0.4;
    // 레이블 높이: 버튼 크기의 20%
    const labelHeight = size * 0.2;
    // 내부 여백
    const spacing = size * 0.05;

    return (
        <TouchableOpacity
            style={[styles.container, { width: 70, height: 70, borderRadius: size * 0.15, paddingBottom: spacing }]}
            onPress={onPress}
            activeOpacity={0.7}
        >
            <Image
                source={iconSource}
                style={{ width: iconSize, height: iconSize, marginBottom: spacing }}
                resizeMode="contain"
            />
            <Text style={[styles.label, { lineHeight: labelHeight }]}>{label}</Text>
        </TouchableOpacity>
    );
};

export default SquareButton;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.gray300,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    label: {
        ...subtitle12Medium14,
        textAlign: 'center',
    },
});
