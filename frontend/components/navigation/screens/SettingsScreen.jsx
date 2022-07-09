import React from 'react';
import { StyleSheet, View } from 'react-native';

import { COLORS } from '../../utils/themes/colors';
import { Help } from '../../settingfields/Help';
import { About } from '../../settingfields/About';
import { LogIn } from '../../settingfields/LogIn';

export const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonView}>
        <Help />
        <About />
        <LogIn />
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
  }
});