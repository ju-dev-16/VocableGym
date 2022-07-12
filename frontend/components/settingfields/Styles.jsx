import { StyleSheet } from 'react-native';

import { COLORS } from '../utils/themes/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryBackgroundColor
  },
  button: {
    flexDirection: 'row',
    paddingVertical: 20,
    paddingLeft: 20,
    height: 75,
    backgroundColor: COLORS.secondaryColor,
    borderBottomColor: COLORS.primaryBackgroundColor,
    borderBottomWidth: 1,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.primaryColor,
    paddingLeft: 20
  },
  infos: {
    marginHorizontal: 10
  },
  infoText: {
    color: COLORS.primaryColor,
    fontSize: 22,
    marginVertical: 5,
    bottom: 50
  },  
  socials: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 40,
    top: 150
  },
  help: {
    bottom: 60,
    margin: 10
  },
  headline: {
    fontWeight: 'bold',
    fontSize: 22
  },
  helpText: {
    top: 5,
    fontSize: 22,
    color: COLORS.primaryColor,
    marginVertical: 5
  }
});