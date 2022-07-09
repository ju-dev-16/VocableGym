import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Async from 'react-async';

import { COLORS } from '../../utils/themes/colors';
import { getUser } from '../../utils/api/users';
import { VocabularySet } from '../../utils/model/VocabularySet';
import { NoVocabularySets } from '../../placeholder/NoVocabularySets';

export const VocabularySetsScreen = ({ navigation }) => {
  const VocabularySets = () => {
    return <Async promiseFn={getUser} id='62c93d54af359c003c4d8b71'>
      {({ data, error, isPending }) => {
        if (isPending) return <ActivityIndicator animating={isPending} size='large' />

        if (error) return <Text>Something went wrong: {error.message}</Text>;
        
        if (data) {
          return (
            <View style={styles.container}>
              <ScrollView style={styles.vocabularySets}>
                {data.vocabularySets.map(({ created, name, vocabularies }) => <VocabularySet created={created} name={name} vocabularies={vocabularies} key={name}/> )}
              </ScrollView>
              <TouchableOpacity 
                onPress={() => navigation.navigate('Camera')}
                style={styles.buttonVocabularySets}>
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
              <StatusBar style='light' />
            </View>
          );
        } else {
          return (
            <View style={styles.container}>
              <NoVocabularySets />
              <TouchableOpacity 
                onPress={() => navigation.navigate('Camera')}
                style={styles.buttonNoVocabularySets}>
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
              <StatusBar style='light' />
            </View>
          );
        }
      }}
    </Async>
  }

  return <VocabularySets />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primaryBackgroundColor
  },
  vocabularySets: {
    position: 'absolute',
    top: 20,
    left: 0,
    right: 0,
    bottom: 0
  },
  headline: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.secondaryColor,
  },
  buttonVocabularySets: {
    backgroundColor: COLORS.secondaryColor,
    width: 75,
    height: 75,
    borderRadius: 50,
    top: 225,
    left: 120
  },
  buttonNoVocabularySets: {
    backgroundColor: COLORS.secondaryColor,
    width: 75,
    height: 75,
    borderRadius: 50,
    bottom: 50,
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