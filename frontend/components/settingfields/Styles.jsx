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
  }
});