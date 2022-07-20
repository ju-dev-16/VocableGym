import { StyleSheet, View, TouchableOpacity, Text, Modal } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { COLORS } from '../themes/colors';

export const Popup = ({ children, modalVisible, setModalVisible, title }) => {
  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(!modalVisible)}>
      <View style={styles.container}>
        <View style={styles.modalView}>
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
            <Ionicons name='arrow-back-outline' size={44} color={COLORS.primaryColor}/>
          </TouchableOpacity>
          <Text style={styles.title}>{title}</Text>
          {children}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.primaryBackgroundColor
  },
  modalView: {
    height: 650,
    margin: 18,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.primaryColor,
    marginBottom: 100
  }
});