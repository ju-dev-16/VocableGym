import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { COLORS } from '../../utils/themes/Colors';

export const VocabularySetsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Ionicons 
        name='file-tray-stacked' 
        size={200} 
        color={COLORS.playerholderColor}
        onPress={() => navigation.navigate('Camera')} />
      <Text style={styles.headline}>No vocabulary sets</Text>
      <TouchableOpacity 
        onPress={() => navigation.navigate('Camera')}
        style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primaryBackgroundColor
  },
  headline: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.secondaryColor,
  },
  button: {
    backgroundColor: COLORS.secondaryColor,
    width: 75,
    height: 75,
    borderRadius: 50,
    bottom: -115,
    left: 120
  },
  buttonText: {
    color: COLORS.activeTintColor,
    fontSize: 50,
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: 'bold'
  }
});