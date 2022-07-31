import { useState } from 'react';
import { Text, TouchableOpacity, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { COLORS } from '../../utils/themes/colors';
import { Popup } from '../../utils/model/Popup';

import { loginStyles } from './Login';

export const Register = ({ modalVisible, setModalVisible }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  return (
    <>

      <Popup modalVisible={modalVisible} setModalVisible={setModalVisible} title='Register'>

        <TextInput
        style={loginStyles.input}
        onChangeText={setUsername}
        value={username}
        placeholder='username' 
        />

        <TextInput
        style={loginStyles.input}
        onChangeText={setEmail}
        value={email}
        placeholder='email' 
        />

        <TextInput
        style={loginStyles.input}
        onChangeText={setPassword}
        value={password}
        placeholder='password' 
        />

        <TouchableOpacity style={{top: 35, left: 110}}>
          <Ionicons 
          name='log-in-outline' 
          size={64} 
          color={COLORS.primaryColor} 
          />
        </TouchableOpacity>

        <TouchableOpacity style={{top: 100, left: 120}} onPress={() => setModalVisible(false)}>
          <Text>SIGN IN</Text>
        </TouchableOpacity>

      </Popup>

    </>
  );
}