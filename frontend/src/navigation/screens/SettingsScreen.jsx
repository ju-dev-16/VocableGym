import { View } from 'react-native';

import { COLORS } from '../../utils/themes/colors';
import { Help } from '../settingfields/Help';
import { About } from '../settingfields/About';
import { Login } from '../settingfields/Login';

export const SettingsScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.primaryBackgroundColor}}>
      <View style={{marginTop: 20}}>
        <Help />
        <About />
        <Login />
      </View>
    </View>
  );
}