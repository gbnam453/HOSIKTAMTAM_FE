// src/screens/HomeScreen.js
import React, { useRef, useState } from 'react';
import { Animated, View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import colors from '../styles/colors';
import SearchBar from '../components/HomeScreen/SearchBar';
import SquareButton from '../components/HomeScreen/SquareButton';
import RecommendedRestaurant from '../components/HomeScreen/RecommendedRestaurant';

const { width, height } = Dimensions.get('window');
// 버튼 크기 계산 (전체 너비의 90%에서 3칸 간격(12px) 뺀 뒤 4로 나눔)
const BUTTON_SIZE = (width * 0.9 - 3 * 12) / 4;

// 카테고리 버튼 데이터
const categories = [
    { icon: require('../assets/images/HomeScreen/icon_rice.png'),      label: '밥' },
    { icon: require('../assets/images/HomeScreen/icon_soup.png'),      label: '탕' },
    { icon: require('../assets/images/HomeScreen/icon_noodle.png'),    label: '면' },
    { icon: require('../assets/images/HomeScreen/icon_fastfood.png'),  label: '패스트푸드' },
    { icon: require('../assets/images/HomeScreen/icon_cafe.png'),      label: '카페' },
    { icon: require('../assets/images/HomeScreen/icon_pub.png'),       label: '주점' },
    { icon: require('../assets/images/HomeScreen/icon_school.png'),    label: '학교식당' },
    { icon: require('../assets/images/HomeScreen/icon_dorm.png'),      label: '기숙사' },
];

export default function HomeScreen() {
    const insets = useSafeAreaInsets();
    const [searchText, setSearchText] = useState('');
    const scrollY = useRef(new Animated.Value(0)).current;

    // 헤더 애니메이션 계산
    const AVAILABLE_HEIGHT    = height - insets.top;
    const HEADER_MAX_HEIGHT   = AVAILABLE_HEIGHT * 0.18;
    const HEADER_MIN_HEIGHT   = AVAILABLE_HEIGHT * 0.1;
    const searchBarHeight     = height * 0.06;

    const headerHeight = scrollY.interpolate({
        inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
        outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
        extrapolate: 'clamp',
    });
    const panelTop      = Animated.add(headerHeight, insets.top);
    const searchBarTop  = insets.top + HEADER_MAX_HEIGHT - searchBarHeight - 12;

    return (
        <SafeAreaView style={styles.container} edges={['left','right','bottom']}>
            {/* Animated Header */}
            <Animated.View style={[styles.header, { top: insets.top, height: headerHeight }]}>
                <Image
                    source={require('../assets/images/Common/icon_logo.png')}
                    style={[styles.logo,   { width: height * 0.06, height: height * 0.06 }]}
                    resizeMode="contain"
                />
                <Image
                    source={require('../assets/images/HomeScreen/icon_burger.png')}
                    style={[styles.burger, { width: height * 0.03, height: height * 0.03 }]}
                    resizeMode="contain"
                />
            </Animated.View>

            {/* Fixed SearchBar */}
            <Animated.View style={[styles.searchWrapper, { top: searchBarTop }]}>
                <SearchBar
                    value={searchText}
                    onChangeText={setSearchText}
                    placeholder="검색어를 입력하세요"
                />
            </Animated.View>

            {/* Content Panel */}
            <Animated.View style={[styles.panel, { top: panelTop }]}>
                <Animated.ScrollView
                    contentContainerStyle={styles.contentContainer}
                    scrollEventThrottle={16}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                        { useNativeDriver: false }
                    )}
                >
                    {/* 1행: 인덱스 0~3 */}
                    <View style={styles.row}>
                        {categories.slice(0,4).map((cat, i) => (
                            <SquareButton
                                key={i}
                                iconSource={cat.icon}
                                label={cat.label}
                                size={BUTTON_SIZE}
                                onPress={() => console.log(cat.label)}
                            />
                        ))}
                    </View>

                    {/* 2행: 인덱스 4~7 */}
                    <View style={styles.row}>
                        {categories.slice(4,8).map((cat, i) => (
                            <SquareButton
                                key={i}
                                iconSource={cat.icon}
                                label={cat.label}
                                size={BUTTON_SIZE}
                                onPress={() => console.log(cat.label)}
                            />
                        ))}
                    </View>

                    <RecommendedRestaurant/>
                    <RecommendedRestaurant/>
                    <RecommendedRestaurant/>
                    <RecommendedRestaurant/>
                    <RecommendedRestaurant/>
                    <RecommendedRestaurant/>
                </Animated.ScrollView>
            </Animated.View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary001,
    },
    header: {
        position: 'absolute',
        left: 0, right: 0,
        backgroundColor: colors.primary001,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        position: 'absolute',
        left: '50%',
        marginLeft: -((height * 0.06) / 2),
        top: 12,
    },
    burger: {
        position: 'absolute',
        right: 12,
        top: 12,
    },
    searchWrapper: {
        position: 'absolute',
        left: width * 0.05,
        width: width * 0.9,
        height: height * 0.06,
        zIndex: 10,
    },
    panel: {
        position: 'absolute',
        left: 0, right: 0, bottom: 0,
        backgroundColor: colors.white000,
        overflow: 'hidden',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    contentContainer: {
        marginTop: 20,
        paddingBottom: 40,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
        width: width * 0.8,
        marginHorizontal: width * 0.1,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 12,
        marginLeft: width * 0.05,
    },
});
