import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { Camera, CameraType } from 'expo-camera';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { COLORS } from '../../utils/themes/Colors';

export const CameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.preview} type={type}>
        <TouchableOpacity style={styles.menubar}>
          <Ionicons name='flashlight-outline' size={48} color={COLORS.secondaryColor} style={styles.menuItem} />
          <Ionicons name='camera-outline' size={48} color={COLORS.secondaryColor} style={styles.menuItem} />
        </TouchableOpacity>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  menubar: {
    bottom: 25,
    flexDirection: 'row',
  },
  menuItem: {
    backgroundColor: COLORS.primaryBackgroundColor,
    marginHorizontal: 25,
    borderRadius: 25,
    padding: 10
  }
});