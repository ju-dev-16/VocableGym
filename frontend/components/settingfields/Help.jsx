import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
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
      <Popup modalVisible={modalVisible} setModalVisible={setModalVisible} title='Help'>
        <View style={styles.help}>
          <Text style={styles.headline}>How to create a vocabulary set?</Text>
          <Text style={styles.helpText}>
            Go to the camera section and take a picuture of your vocabularies.
          </Text>
          <Text style={styles.helpText}>
            Make sure you have the foreign word and the translation on the picture!
          </Text>
          <Text style={styles.helpText}>
            That's it.
          </Text>
        </View>
        <View style={styles.help}>
          <Text style={styles.headline}>More questions?</Text>
          <Text style={styles.helpText}>
            Discord: ju_dev#4443
          </Text>
        </View>
      </Popup>
    </>
  );
}