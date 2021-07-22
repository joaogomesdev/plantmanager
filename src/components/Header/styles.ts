import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'


import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: getStatusBarHeight(), 
  },
  avatar: {
    width: 70,    
    height: 70,
    borderRadius: 40
  },
  gretting: {
    fontSize: 32,
    color: theme.colors.heading,
    fontFamily: theme.fonts.text
  },
  userName: {
    fontSize: 32,
    color: theme.colors.heading,
    fontFamily: theme.fonts.heading,
    lineHeight: 40
  }
});