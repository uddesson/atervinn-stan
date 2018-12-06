//@flow
import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const utilityStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  col: {
    flexDirection: 'column',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  itemsCenter: {
    alignItems: 'center',
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
  greenText: {
    color: colors.darkGreen,
  },
  capitalizeText: {
    textTransform: 'capitalize',
  },
  centerText: {
    textAlign: 'center',
  },
  absolute: {
    position: 'absolute',
  },
  relative: {
    position: 'relative',
  },
});
