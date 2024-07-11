import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../utils/colors';
import {font} from '../utils/font';

const HomeScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Image
          source={require('../assets/login-img.png')}
          style={styles.loginImg}
        />
        <Text style={styles.text}>Lorem, ipsum dolor.</Text>
        <Text style={styles.subText}>Dolor sit amet consectetur.</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.loginButtonWrapper, {backgroundColor: colors.primary}]}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginButtonWrapper}>
            <Text style={[styles.loginButtonText, {color: colors.primary}]}>Sign-up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
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
    fontSize: 40,
    fontFamily: font.SemiBold,
    padding: 20,
    textAlign: 'center',
    color: colors.primary,
    marginTop: 40,
  },
  subText: {
    fontSize: 18,
    paddingHorizontal: 20,
    textAlign: 'center',
    color: colors.secondary,
    fontFamily: font.Medium,
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    borderWidth: 2,
    borderColor: colors.primary,
    width: '80%',
    height: 60,
    borderRadius: 100,
  },
  loginButtonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  
    width: '50%',
    borderRadius: 90
  },
  loginButtonText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: font.SemiBold
  }

});
