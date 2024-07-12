import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {colors} from '../utils/colors';
import {font} from '../utils/font';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [secureEntry, setSecureEntry] = useState(true);
  const handleGoBack = () => {
    navigation.goBack();
  };
  const handleSignUp = () => {
    navigation.navigate("SIGNUP")
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleGoBack} style={styles.buttonWrapper}>
          <Ionicons
            name={'arrow-back-outline'}
            color={colors.primary}
            size={25}
          />
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.welcomeText}>Hey, Welcome Back</Text>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Ionicons
              name={'mail-outline'}
              size={30}
              color={colors.secondary}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Enter your e-mail"
              placeholderTextColor={colors.secondary}
              keyboardType="email-address"
            />
          </View>
          <View style={styles.inputContainer}>
            <SimpleLineIcons name={'lock'} size={30} color={colors.secondary} />
            <TextInput
              style={styles.textInput}
              placeholder="Enter your password"
              placeholderTextColor={colors.secondary}
              keyboardType="password"
              secureTextEntry={secureEntry}
            />
            <TouchableOpacity onPress={() => setSecureEntry(prev => !prev)}>
              <SimpleLineIcons
                name={'eye'}
                size={20}
                color={colors.secondary}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Text style={styles.forgetPassword}>Forget password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
          <Text style={styles.continueText}>Or continue with </Text>
          <TouchableOpacity style={styles.googleButtonContainer}>
            <TouchableOpacity style={styles.googleLogo}>
              <Image source={require('../assets/google.png')} />
            </TouchableOpacity>
            <Text style={styles.googleText}>Google</Text>
          </TouchableOpacity>
          <View style={styles.signUpContainer}>
            <Text style={styles.accountText}>Don't have an account?</Text>
            <TouchableOpacity onPress={handleSignUp}><Text style={styles.signUpText}>Sign up</Text></TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
  },
  buttonWrapper: {
    height: 40,
    width: 40,
    backgroundColor: colors.gray,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    marginVertical: 20,
  },
  welcomeText: {
    fontSize: 32,
    color: colors.primary,
    fontFamily: font.SemiBold,
  },
  formContainer: {
    marginTop: 20,
  },
  inputContainer: {
    padding: 2,
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 100,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 10,
    fontFamily: font.Light,
  },
  forgetPassword: {
    textAlign: 'right',
    color: colors.primary,
    fontFamily: font.SemiBold,
    marginVertical: 10,
  },
  loginButton: {
    backgroundColor: colors.primary,
    borderRadius: 100,
    marginVertical: 15,
  },
  loginText: {
    color: colors.white,
    fontSize: 20,
    fontFamily: font.SemiBold,
    textAlign: 'center',
    padding: 10,
  },
  continueText: {
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: font.Regular,
    fontSize: 14,
    color: colors.primary,
  },
  googleButtonContainer: {
    flexDirection: 'row',
    borderWidth: 2,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    gap: 10,
  },
  googleLogo: {
    height: 20,
    width: 19,
  },
  googleText: {
    fontSize: 19,
    fontFamily: font.SemiBold,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    gap: 6,
  },
  accountText: {
    color: colors.primary,
    fontFamily: font.Regular,
  },
  signUpText: {
    color: colors.primary,
    fontFamily: font.Bold,
  },
});
