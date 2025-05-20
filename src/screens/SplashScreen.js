import React, { useEffect } from 'react';
import { View, Image, StyleSheet, StatusBar } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('HomeScreen'); // 4초 뒤에 'HomeScreen'으로 이동
    }, 2000);
    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 클리어
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#f8c830" barStyle="dark-content" />

      <Image
        source={require('../assets/images/SplashScreen/logo.png')}
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8c830',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default SplashScreen;