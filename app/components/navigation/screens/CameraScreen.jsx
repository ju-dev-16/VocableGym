import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { COLORS } from '../../themes/Colors';

export const CameraScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Text 
        onPress={() => navigation.navigate('Vocabulary Sets')}
        style={styles.headline}>Camera</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: COLORS.secondaryBackground
  },
  headline: {
    fontSize: 26,
    fontWeight: 'bold',
    color: COLORS.primaryColor
  }
});