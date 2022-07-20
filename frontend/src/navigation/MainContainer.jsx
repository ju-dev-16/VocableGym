import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { VocabularySetsScreen } from './screens/VocabularySetsScreen';
import { CameraScreen } from './screens/CameraScreen';
import { SettingsScreen } from './screens/SettingsScreen';

import { COLORS } from '../utils/themes/colors';

const vocabularySetsName = 'Vocabulary Sets';
const cameraName = 'Camera';
const settingsName = 'Settings'

const Tab = createBottomTabNavigator();

const MainContainer = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={vocabularySetsName}
        screenOptions={({route}) => ({
          tabBarIcon: (({focused, color, size}) => {
            let iconName;
            let rn = route.name;

            if (rn === vocabularySetsName) {
              iconName = focused ? 'file-tray-stacked' : 'file-tray-stacked-outline'
            } else if (rn === cameraName) {
              iconName = focused ? 'camera' : 'camera-outline'
            } else if (rn === settingsName) {
              iconName = focused ? 'settings' : 'settings-outline'
            }

            return <Ionicons name={iconName} size={size} color={color} />
          }),
            tabBarActiveTintColor: COLORS.activeTintColor,
            tabBarInactiveTintColor: COLORS.inactiveTintColor,
            tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
            tabBarStyle: { padding: 10, height: 70, backgroundColor: COLORS.primaryBackgroundColor },
            headerStyle: { backgroundColor: COLORS.primaryBackgroundColor},
            headerTitleStyle: { color: COLORS.inactiveTintColor, fontWeight: 'bold', fontSize: 24},
            headerTitleAlign: 'center'
        })}
        >
        <Tab.Screen name={vocabularySetsName} component={VocabularySetsScreen} />
        <Tab.Screen name={cameraName} component={CameraScreen} />
        <Tab.Screen name={settingsName} component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;