import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { COLORS } from '../../utils/themes/colors';

export const NoVocabularySets = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: COLORS.primaryBackgroundColor}}>
      <Ionicons 
      name='file-tray-stacked' 
      size={200} 
      color={COLORS.playerholderColor}
      />

      <Text style={{fontSize: 28, fontWeight: 'bold', color: COLORS.secondaryColor}}>
        No vocabulary sets
      </Text>
    </View>
  );
}