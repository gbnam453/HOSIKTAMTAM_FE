// src/screens/HomeScreen.js
import React, { useRef, useState } from 'react';
import {
    Animated,
    Text,
    StyleSheet,
    Dimensions,
    Image,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import colors from '../styles/colors';
import SearchBar from '../components/HomeScreen/SearchBar';
import Colors from '../styles/colors';

const { width, height } = Dimensions.get('window');

const HomeScreen = () => {
    const insets = useSafeAreaInsets();
    const AVAILABLE_HEIGHT = height - insets.top;
    const HEADER_MAX_HEIGHT = AVAILABLE_HEIGHT * 0.18;
    const HEADER_MIN_HEIGHT = AVAILABLE_HEIGHT * 0.1;
    const searchBarHeight = height * 0.06;
    const scrollY = useRef(new Animated.Value(0)).current;
    const [searchText, setSearchText] = useState('');

    // 헤더 높이 애니메이션
    const headerHeight = scrollY.interpolate({
        inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
        outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
        extrapolate: 'clamp',
    });

    // 패널 위치 (헤더 bottom)
    const panelTop = Animated.add(headerHeight, insets.top);

    // searchbar 고정 위치: 초기 헤더 bottom - searchBarHeight - 12
    const searchBarTop = insets.top + HEADER_MAX_HEIGHT - searchBarHeight - 12;

    const logoSize = height * 0.06;
    const burgerSize = height * 0.03;

    const recommended_restaurant = [
        {
            restaurant_name: '진보',
            categories : '밥/면',
            time: '09:00 ~ 17:00',
        },
        {
            restaurant_name: '탕화쿵푸',
            categories : '탕',
            time: '09:00 ~ 17:00',
        },
        {
            restaurant_name: '용우동',
            categories : '밥/면?',
            time: '09:00 ~ 17:00?',
        },
        {
            restaurant_name: '용우동',
            categories : '밥/면',
            time: '09:00 ~ 17:00',
        },
    ];

    return (
        <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
            {/* Animated Header */}
            <Animated.View style={[styles.header, { top: insets.top, height: headerHeight }]}>
                <Image
                    source={require('../assets/images/Common/icon_logo.png')}
                    style={[styles.logo, { width: logoSize, height: logoSize, left: '50%', marginLeft: -logoSize/2 }]}
                    resizeMode="contain"
                />
                <Image
                    source={require('../assets/images/HomeScreen/icon_burger.png')}
                    style={[styles.burger, { width: burgerSize, height: burgerSize, top: 12 + (logoSize - burgerSize)/2 }]}
                    resizeMode="contain"
                />
            </Animated.View>

            {/* Fixed SearchBar below header */}
            <Animated.View style={{
                position: 'absolute',
                top: searchBarTop,
                left: width * 0.05,
                width: width * 0.9,
                height: searchBarHeight,
                zIndex: 0,
            }}>
                <SearchBar
                    value={searchText}
                    onChangeText={setSearchText}
                    placeholder="검색어를 입력하세요"
                />
            </Animated.View>

            {/* Animated White Panel covers SearchBar on scroll */}
            <Animated.View style={[styles.panel, { top: panelTop, zIndex: 1 }]}>
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

            <Animated.View style={{ top: panelTop, zIndex:1 }}>
                <Animated.ScrollView horizontal={true}>
                    {recommended_restaurant.map((item, index) => (
                        <Animated.View key={index} style={styles.recommended_card}>
                            <Image
                                style={styles.recommended_image}
                                source={{ uri: 'https://via.placeholder.com/260x260' }}
                            />
                            <Animated.View style={{flexDirection:'row', top: 10, paddingLeft: 5}}>
                                <Text>{item.restaurant_name}</Text>
                                <Text> | </Text>
                                <Text>{item.categories}</Text>
                            </Animated.View>
                            <Text style={{top:10, paddingLeft: 5}}>{item.time}</Text>
                        </Animated.View>
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
    recommended_card: {
        margin: 10,
        borderWidth:1,
        borderColor:Colors.gray200,
        borderRadius: 10,
        width: 140,
        height: 200,
    },
    recommended_image: {
        width: 140,
        height: 140,
        backgroundColor: Colors.gray600,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
});
