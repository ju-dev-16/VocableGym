import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Pressable, Modal } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { COLORS } from '../../utils/themes/colors';

export const SettingsScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.button}>
          <Ionicons name='help-circle-outline' size={32} color={COLORS.primaryColor} style={{alignSelf: 'center'}} />
          <Text style={styles.buttonText}>Help</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Ionicons name='people-circle-outline' size={32} color={COLORS.primaryColor}/>
          <Text style={styles.buttonText}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
          <Ionicons name='log-in-outline' size={32} color={COLORS.primaryColor}/>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}>
          <View style={styles.container}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryBackgroundColor
  },
  buttonView: {
    marginTop: 20
  },
  button: {
    flexDirection: 'row',
    paddingVertical: 20,
    paddingLeft: 20,
    height: 75,
    backgroundColor: COLORS.secondaryColor,
    borderBottomColor: COLORS.primaryBackgroundColor,
    borderBottomWidth: 1,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.primaryColor,
    paddingLeft: 20
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonClose: {
    backgroundColor: COLORS.primaryColor,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});