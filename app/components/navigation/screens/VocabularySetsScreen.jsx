import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useAsync } from 'react-async';

import { COLORS } from '../../utils/themes/colors';
import { getUser } from '../../utils/api/users';
import { VocabularySet } from '../../utils/model/VocabularySet';
import { NoVocabularySets } from '../../placeholder/NoVocabularySets';

export const VocabularySetsScreen = ({ navigation }) => {
  const VocabularySets = () => {
    const { data, error } = useAsync({getUser, id: '62c58ea64d2bd966791e2011'});

    if (error) return error.message;

    if (!data) return <NoVocabularySets />
  
    return (
      <ScrollView>
      {() => {
        return (
          data.vocabularySets.map(vocabularySet => <VocabularySet name={vocabularySet.name} /> )
        );
      }}
      </ScrollView>
    );
  }

  return (
    <View style={styles.container}>
      <VocabularySets />
      <TouchableOpacity 
        onPress={() => navigation.navigate('Camera')}
        style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      <StatusBar style='light' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primaryBackgroundColor
  },
  headline: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.secondaryColor,
  },
  button: {
    backgroundColor: COLORS.secondaryColor,
    width: 75,
    height: 75,
    borderRadius: 50,
    top: 230,
    left: 120
  },
  buttonText: {
    color: COLORS.activeTintColor,
    fontSize: 50,
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: 'bold'
  }
});