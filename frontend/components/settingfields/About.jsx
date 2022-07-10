import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { COLORS } from '../utils/themes/colors';
import { Popup } from '../utils/model/Popup';
import { styles } from './Styles';

export const About = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
        <Ionicons name='people-circle-outline' size={32} color={COLORS.primaryColor}/>
        <Text style={styles.buttonText}>About</Text>
      </TouchableOpacity>
      <Popup modalVisible={modalVisible} setModalVisible={setModalVisible}>
 
      </Popup>
    </>
  );
}