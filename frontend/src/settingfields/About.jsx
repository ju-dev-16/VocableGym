import { useState } from 'react';
import { Text, View, TouchableOpacity, Linking } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { COLORS } from '../utils/themes/colors';
import { Popup } from '../utils/model/Popup';
import { styles } from './Styles';

export const About = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
        <Ionicons name='people-circle-outline' size={32} color={COLORS.primaryColor}/>
        <Text style={styles.buttonText}>About</Text>
      </TouchableOpacity>
      <Popup modalVisible={modalVisible} setModalVisible={setModalVisible} title='About'>
        <View style={styles.infos}>
          <Text style={styles.infoText}>I'm a 16 years old student {'&'} hobby developer.</Text>
          <Text style={styles.infoText}>I'm currently working on Java, Python and JavaScript.</Text>
          <Text style={styles.infoText}>How to reach me: jahidudd65@gmail.com</Text>
        </View>
        <View style={styles.socials}>
          <TouchableOpacity onPress={() => Linking.openURL('https://twitter.com/JuDev75361232?t=7SKMV-5apxuPdi3hgnV0MQ&s=09')}>
            <Ionicons name='logo-twitter' size={50} color={COLORS.primaryColor} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/accounts/onetap/?next=%2Fjahid_uddinx%2F')}>
            <Ionicons name='logo-instagram' size={50} color={COLORS.primaryColor} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://github.com/ju-dev-16')}>
            <Ionicons name='logo-github' size={50} color={COLORS.primaryColor} />
          </TouchableOpacity>
        </View>
      </Popup>
    </>
  );
}