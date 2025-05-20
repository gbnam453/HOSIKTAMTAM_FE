import {Animated, Image, StyleSheet, Text} from "react-native";
import React from "react";
import Colors from "../../styles/colors";

const RecommendedRestaurant = () => {

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
            restaurant_name: 'test',
            categories : '밥/면?',
            time: '09:00 ~ 17:00?',
        },
        {
            restaurant_name: '용우동',
            categories : '밥/면',
            time: '09:00 ~ 17:00',
        },
    ];

    return(
        <Animated.View style={{ zIndex:1, position: 'absolute', top:0 }}>
            <Text style={{fontWeight:'bold', fontSize:20, marginLeft: 10}}>추천 식당</Text>
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
    );
};

export default RecommendedRestaurant;

const styles = StyleSheet.create({
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
