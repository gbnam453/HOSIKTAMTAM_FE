// src/components/molecules/SearchBar.js
import React from 'react';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import colors from '../../styles/colors';
import { Image } from 'react-native';

const { width, height } = Dimensions.get('window');

const SearchBar = ({ value, onChangeText, placeholder }) => (
    <View style={styles.container}>
        <Image
            source={require('../../assets/images/HomeScreen/icon_search.png')}
            style={styles.icon}
        />
        <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor="rgba(0,0,0,0.5)"
            underlineColorAndroid="transparent"
        />
    </View>
);

SearchBar.propTypes = {
    value: PropTypes.string,
    onChangeText: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
};

SearchBar.defaultProps = {
    value: '',
    placeholder: 'Search...',
};

export default SearchBar;

const ICON_SIZE = 20;
const { width: W, height: H } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: W * 0.9,
        height: 45,
        backgroundColor: 'rgba(255,255,255,0.4)',
        borderRadius: (H * 0.06) / 2,
        paddingHorizontal: 16,
    },
    icon: {
        width: ICON_SIZE,
        height: ICON_SIZE,
        marginRight: 8,
    },
    input: {
        flex: 1,
        fontSize: 14,
        color: colors.textPrimary || '#000',
        height: '100%',
    },
});
