import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { Camera, CameraType } from 'expo-camera';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { COLORS } from '../../utils/themes/colors';

export const CameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (camera){
        const data = await camera.takePictureAsync(null);
        setImage(data.uri);
    }
  }

  const flashlight = () => {
    setFlash(
      flash === Camera.Constants.FlashMode.off
        ? Camera.Constants.FlashMode.torch
        : Camera.Constants.FlashMode.off
    );
  }

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.preview} type={type} flashMode={flash} ref={ref => setCamera(ref)} >
        <View style={styles.menubar}>
          <TouchableOpacity onPress={flashlight}>
            <Ionicons name='flashlight-outline' size={48} color={COLORS.secondaryColor} style={styles.menuItem} />
          </TouchableOpacity>
          <TouchableOpacity onPress={async () => await takePicture()}>
            <Ionicons name='camera-outline' size={48} color={COLORS.secondaryColor} style={styles.menuItem} />
          </TouchableOpacity>
        </View>
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
    borderRadius: 30,
    padding: 10
  }
});