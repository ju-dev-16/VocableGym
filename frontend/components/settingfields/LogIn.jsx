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
      <Popup modalVisible={modalVisible} setModalVisible={setModalVisible} title='Login'>
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
  input: {
    height: 50,
    margin: 12,
    borderWidth: 0,
    padding: 10,
    paddingLeft: 15,
    borderRadius: 20,
    backgroundColor: 'lightgrey',
    color: COLORS.primaryColor
  },
  forgotPassword: {
    left: 20
  },  
  forgotPasswordText: {
    textDecorationLine: 'underline',
    color: COLORS.primaryColor
  },  
  submit: {
    top: 75,
    left: 110
  },
  createAccount: {
    top: 150,
    left: 90
  }
});