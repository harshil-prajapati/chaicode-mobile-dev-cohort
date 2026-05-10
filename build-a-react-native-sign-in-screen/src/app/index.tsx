import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  Feather,
  FontAwesome,
  AntDesign,
  Ionicons,
} from '@expo/vector-icons';

const SignIn = () => {
  const [secureText, setSecureText] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Feather name="plus" size={60} color="#9BE000" />
      </View>
      <Text style={styles.title}>Sign In</Text>
      <Text style={styles.subtitle}>
        Let’s experience the joy of telecare AI.
      </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email Address</Text>

        <View style={styles.inputBox}>
          <Feather name="mail" size={20} color="#555" />
          <TextInput
            placeholder="Enter your email"
            placeholderTextColor="#888"
            style={styles.input}
            keyboardType="email-address"
          />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>

        <View style={styles.inputBox}>
          <Feather name="lock" size={20} color="#555" />

          <TextInput
            placeholder="Enter your password..."
            placeholderTextColor="#888"
            secureTextEntry={secureText}
            style={styles.input}
          />

          <TouchableOpacity onPress={() => setSecureText(!secureText)}>
            <Ionicons
              name={secureText ? 'eye-off-outline' : 'eye-outline'}
              size={22}
              color="#999"
            />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text>

        <Feather name="arrow-right" size={22} color="#fff" />
      </TouchableOpacity>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialBtn}>
          <FontAwesome name="facebook" size={24} color="#333" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialBtn}>
          <AntDesign name="google" size={24} color="#333" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialBtn}>
          <AntDesign name="instagram" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Don’t have an account?{' '}
          <Text style={styles.signup}>Sign Up.</Text>
        </Text>

        <Text style={styles.forgot}>Forgot your password?</Text>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;

const PRIMARY = '#9BE000';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    paddingHorizontal: 24,
    paddingTop: 40,
  },

  logoContainer: {
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 30,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 42,
    fontWeight: '700',
    textAlign: 'center',
    color: '#222',
  },

  subtitle: {
    textAlign: 'center',
    color: '#777',
    marginTop: 10,
    marginBottom: 40,
    fontSize: 16,
  },

  inputContainer: {
    marginBottom: 22,
  },

  label: {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },

  inputBox: {
    height: 62,
    backgroundColor: '#fff',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
  },

  input: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: '#222',
  },

  button: {
    marginTop: 20,
    backgroundColor: PRIMARY,
    height: 62,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },

  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },

  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 45,
    gap: 16,
  },

  socialBtn: {
    width: 65,
    height: 65,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#DDD',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  footer: {
    marginTop: 40,
    alignItems: 'center',
  },

  footerText: {
    fontSize: 15,
    color: '#444',
  },

  signup: {
    color: PRIMARY,
    fontWeight: '700',
    textDecorationLine: 'underline',
  },

  forgot: {
    marginTop: 14,
    color: PRIMARY,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});