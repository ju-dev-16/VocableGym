import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { COLORS } from '../themes/colors';

export const VocabularySet = ({ name }) => {
  return (
    <View style={styles.buttonView}>
      <Text style={styles.text}>{name}</Text>
      <TouchableOpacity style={styles.playButton}>
        <Ionicons name='play-outline' size={32} color={COLORS.primaryColor}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.deleteButton}>
        <Ionicons name='trash-outline' size={32} color={COLORS.primaryColor}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonView: {
    flexDirection: 'row',
    paddingVertical: 20,
    paddingLeft: 20,
    height: 75,
    backgroundColor: COLORS.secondaryColor,
    borderBottomColor: COLORS.primaryBackgroundColor,
    borderBottomWidth: 0.5
  },
  playButton: {
    borderRadius: 8,
    padding: 4,
    backgroundColor: 'lightgreen'
  },
  deleteButton: {
    borderRadius: 8,
    padding: 4,
    backgroundColor: 'red'
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.primaryColor,
    paddingLeft: 20
  }
});