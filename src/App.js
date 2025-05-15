// App.js
import React from 'react';
import { Text, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// 스크린 컴포넌트들
import SplashScreen  from '../src/screens/SplashScreen';
import HomeScreen    from '../src/screens/HomeScreen';
import SearchScreen  from '../src/screens/SearchScreen';
import ListScreen    from '../src/screens/ListScreen';
import DetailScreen  from '../src/screens/DetailScreen';

// 폰트 크기 고정
Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
                <Stack.Screen name="HomeScreen"   component={HomeScreen} />
                <Stack.Screen name="SearchScreen" component={SearchScreen} />
                <Stack.Screen name="ListScreen"   component={ListScreen} />
                <Stack.Screen name="DetailScreen" component={DetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
