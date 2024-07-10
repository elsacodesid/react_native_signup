import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../utils/colors';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Image
        source={require('../assets/login-img.png')}
        style={styles.loginImg}
      />
      <Text style={styles.text}>Lorem, ipsum dolor.</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  logo: {
    height: 40,
    width: 140,
    marginVertical: 20,
  },
  loginImg: {
    height: 250,
    width: 231,
    marginVertical: 30,
  },
  text: {
    fontSize: 36,
  },
});
