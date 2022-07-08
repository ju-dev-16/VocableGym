import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { COLORS } from '../utils/themes/colors';

export const NoVocabularySets = () => {
  return (
    <View style={styles.container}>
      <Ionicons 
        name='file-tray-stacked' 
        size={200} 
        color={COLORS.playerholderColor}
        onPress={() => navigation.navigate('Camera')} />
      <Text style={styles.headline}>No vocabulary sets</Text>
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
    }
});