//@flow

import { StyleSheet } from 'react-native';

export const utilityStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  flex1: {
    flex: 1,
  },
  alignSelfEnd: {
    alignSelf: 'flex-end',
  },
  fullWidth: {
    width: '100%',
  },
  whiteText: {
    color: 'white',
  },
  capitalizeText: {
    textTransform: 'capitalize',
  },
  centerText: {
    textAlign: 'center',
  },
});
