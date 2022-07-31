import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { COLORS } from '../themes/colors';

export const VocabularySet = ({ created, name, vocabularies }) => {
  return (
    <View style={styles.buttonView}>

      <Text style={styles.text}>{name}</Text>

      <TouchableOpacity style={styles.deleteButton}>
        <Ionicons 
        name='trash' 
        size={32} 
        color={COLORS.secondaryColor}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.playButton}>
        <Ionicons 
        name='play' 
        size={32} 
        color={COLORS.secondaryColor}
        />
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  buttonView: {
    flexDirection: 'row',
    marginHorizontal: 10,
    paddingVertical: 20,
    height: 50,
    width: 340,
    backgroundColor: COLORS.secondaryColor,
    marginBottom: 15,
    borderRadius: 50
  },
  playButton: {
    padding: 8,
    backgroundColor: 'lightgreen',
    position: 'absolute',
    alignSelf: 'center',
    right: 0,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50
  },
  deleteButton: {
    padding: 8,
    backgroundColor: 'red',
    position: 'absolute',
    alignSelf: 'center',
    right: 48
  },
  text: {
    position: 'absolute',
    alignSelf: 'center',
    left: 20,
    fontSize: 22,
    color: COLORS.primaryColor,
  }
});