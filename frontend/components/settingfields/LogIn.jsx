import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { COLORS } from '../utils/themes/colors';
import { Popup } from '../utils/model/Popup';
import { styles } from './Styles';

export const Login = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
        <Ionicons name='log-in-outline' size={32} color={COLORS.primaryColor}/>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Popup modalVisible={modalVisible} setModalVisible={setModalVisible}>
        <Text style={loginStyles.title}>Login</Text>
        <TextInput
          style={loginStyles.input}
          onChangeText={setUsername}
          value={username}
          placeholder='username' />
        <TextInput
          style={loginStyles.input}
          onChangeText={setPassword}
          value={password}
          placeholder='password' />
        <TouchableOpacity style={loginStyles.forgotPassword}>
          <Text style={loginStyles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={loginStyles.submit}>
          <Ionicons name='log-in-outline' size={64} color={COLORS.primaryColor} />
        </TouchableOpacity>
        <TouchableOpacity style={loginStyles.createAccount}>
          <Text>CREATE ACCOUNT</Text>
        </TouchableOpacity>
      </Popup>
    </>
  );
}

const loginStyles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.primaryColor,
    marginBottom: 100
  },
  input: {
    height: 40,
    margin: 12,
    border: 'none',
    padding: 10,
    paddingLeft: 15,
    borderRadius: 20,
    outlineStyle: 'none',
    backgroundColor: 'lightgrey'
  },
  forgotPassword: {
    left: 20
  },  
  forgotPasswordText: {
    textDecorationLine: 'underline',
    color: COLORS.primaryColor,
  },  
  submit: {
    top: 150,
    left: 110
  },
  createAccount: {
    textAlign: 'center',
    top: 160
  }
});