import { StyleSheet, Text, View, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Async from 'react-async';

import { COLORS } from '../../utils/themes/colors';
import { VocabularySet } from '../../utils/model/VocabularySet';
import { NoVocabularySets } from '../../placeholder/NoVocabularySets';
import useApi from '../../hooks/useApi';

export const VocabularySetsScreen = ({ navigation }) => {
  const { getUser } = useApi();

  const VocabularySets = () => {
    return <Async promiseFn={getUser} id='62cd7339dd6df23579d76205'>
      {({ data, error, isPending }) => {
        if (isPending) return <ActivityIndicator animating={isPending} size='large' style={{flex: 1, justifyContent: 'center'}} />;

        if (error) return <Text style={{color: '#fff'}}>Something went wrong: {error.message}</Text>;
        
        return data.vocabularySets
          ? <ScrollView style={styles.vocabularySets}>
              {data.vocabularySets.map(({ created, name, vocabularies }) => <VocabularySet created={created} name={name} vocabularies={vocabularies} key={name}/> )}
            </ScrollView>
          : <NoVocabularySets />
      }}
    </Async>
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
  button: {
    backgroundColor: COLORS.secondaryColor,
    width: 75,
    height: 75,
    borderRadius: 50,
    position: 'absolute',
    bottom: 50,
    right: 22
  },
  buttonText: {
    color: COLORS.activeTintColor,
    fontSize: 50,
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: 'bold'
  }
});