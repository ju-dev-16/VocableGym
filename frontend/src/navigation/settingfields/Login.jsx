import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { COLORS } from '../../utils/themes/colors';
import { Popup } from '../../utils/model/Popup';

import { styles } from './Styles';
import { Register } from './Register';

export const Login = () => {

  const [modalVisible, setModalVisible] = useState(false);
  const [registerVisibility, setRegisterVisibility] = useState(false);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
        placeholder='username' 
        />

        <TextInput
        style={loginStyles.input}
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
        placeholder='password' 
        />

        <TouchableOpacity style={{left: 20}}>
          <Text style={{color: COLORS.primaryColor, textDecorationLine: 'underline'}}>
            Forgot Password?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{top: 75, left: 110}}>
          <Ionicons
          name='log-in-outline'
          size={64}
          color={COLORS.primaryColor} 
          />
        </TouchableOpacity>

        <TouchableOpacity style={{top: 150, left: 90}} onPress={() => setRegisterVisibility(true)}>
          <Text>
            CREATE ACCOUNT
          </Text>
        </TouchableOpacity>

        <Register modalVisible={registerVisibility} setModalVisible={setRegisterVisibility} />

      </Popup>
    </>
  );
}

export const loginStyles = StyleSheet.create({
  input: {
    height: 50,
    margin: 12,
    borderWidth: 0,
    padding: 10,
    paddingLeft: 15,
    borderRadius: 30,
    backgroundColor: 'lightgrey',
    color: COLORS.primaryColor
  }
});