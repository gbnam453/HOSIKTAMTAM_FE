// src/screens/HomeScreen.js
import React, { useRef } from 'react';
import {
    Animated,
    Text,
    StyleSheet,
    Dimensions,
    Image,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import colors from '../styles/colors';

const { height } = Dimensions.get('window');

const HomeScreen = () => {
    const insets = useSafeAreaInsets();
    const AVAILABLE_HEIGHT = height - insets.top;
    const HEADER_MAX_HEIGHT = AVAILABLE_HEIGHT * 0.16;
    const HEADER_MIN_HEIGHT = AVAILABLE_HEIGHT * 0.1;
    const scrollY = useRef(new Animated.Value(0)).current;

    const headerHeight = scrollY.interpolate({
        inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
        outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
        extrapolate: 'clamp',
    });
    const panelTop = Animated.add(headerHeight, insets.top);

    const logoSize = height * 0.06;
    const burgerSize = height * 0.03;
    const burgerTopOffset = 12 + (logoSize - burgerSize) / 2;

    return (
        <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
            <Animated.View style={[styles.header, { top: insets.top, height: headerHeight }]}>
                <Image
                    source={require('../assets/images/Common/icon_logo.png')}
                    style={[
                        styles.logo,
                        { width: logoSize, height: logoSize, left: '50%', marginLeft: -logoSize / 2 },
                    ]}
                    resizeMode="contain"
                />
                <Image
                    source={require('../assets/images/HomeScreen/icon_burger.png')}
                    style={[
                        styles.burger,
                        { width: burgerSize, height: burgerSize, top: burgerTopOffset },
                    ]}
                    resizeMode="contain"
                />
            </Animated.View>

            <Animated.View style={[styles.panel, { top: panelTop }]}>
                <Animated.ScrollView
                    style={styles.scroll}
                    contentContainerStyle={styles.contentContainer}
                    scrollEventThrottle={16}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                        { useNativeDriver: false }
                    )}
                >
                    {Array.from({ length: 30 }).map((_, i) => (
                        <Text key={i} style={styles.item}>Item {i + 1}</Text>
                    ))}
                </Animated.ScrollView>
            </Animated.View>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary001,
    },
    header: {
        position: 'absolute',
        left: 0,
        right: 0,
        backgroundColor: colors.primary001,
        overflow: 'hidden',
    },
    logo: {
        position: 'absolute',
        top: 12,
    },
    burger: {
        position: 'absolute',
        right: 12,
    },
    panel: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: colors.white000,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        overflow: 'hidden',
    },
    scroll: {
        flex: 1,
    },
    contentContainer: {
        padding: 20,
        paddingBottom: 40,
    },
    item: {
        height: 80,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: '#ccc',
    },
});
