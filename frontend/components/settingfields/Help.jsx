import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { COLORS } from '../utils/themes/colors';
import { Popup } from '../utils/model/Popup';
import { styles } from './Styles';

export const Help = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
        <Ionicons name='help-circle-outline' size={32} color={COLORS.primaryColor} style={{alignSelf: 'center'}} />
        <Text style={styles.buttonText}>Help</Text>
      </TouchableOpacity>
      <Popup modalVisible={modalVisible} setModalVisible={setModalVisible}>

      </Popup>
    </>
  );
}