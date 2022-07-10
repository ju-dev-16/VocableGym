import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { COLORS } from '../utils/themes/colors';
import { Popup } from '../utils/model/Popup';
import { styles } from './Styles';

export const Login = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [username, onChangeUsername] = useState(null);
  const [password, onChangePassword] = useState(null);

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
        <Ionicons name='log-in-outline' size={32} color={COLORS.primaryColor}/>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Popup modalVisible={modalVisible} setModalVisible={setModalVisible}>
        <View>
          <Text style={loginStyles.title}>Login</Text>
          <TextInput
            style={loginStyles.input}
            onChangeText={onChangeUsername}
            value={username}
            placeholder='username' />
          <TextInput
            style={loginStyles.input}
            onChangeText={onChangePassword}
            value={password}
            placeholder='password' />
          <TouchableOpacity style={loginStyles.submit}>
            <Ionicons name='log-in-outline' size={64} color={COLORS.primaryColor} />
          </TouchableOpacity>
        </View>
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
    marginBottom: 50
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 20
  },
  submit: {
    top: 25,
    left: 110
  }
});