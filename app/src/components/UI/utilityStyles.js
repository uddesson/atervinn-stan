// @flow
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
  justifyAround: {
    justifyContent: 'space-around',
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
  flexGrow: {
    flexGrow: 1,
  },
  alignSelfEnd: {
    alignSelf: 'flex-end',
  },
  fullWidth: {
    width: '100%',
  },
  fullHeight: {
    height: '100%',
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
  uppercaseText: {
    textTransform: 'uppercase',
  },
  centerText: {
    textAlign: 'center',
  },
  lineHeightNormal: {
    lineHeight: 25,
  },
  absolute: {
    position: 'absolute',
  },
  relative: {
    position: 'relative',
  },
  boxShadow: {
    shadowColor: colors.lightGrey,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 2,
    shadowOpacity: 0.8,
  },
  boxShadowDark: {
    shadowColor: colors.darkGrey,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 3,
    shadowOpacity: 0.3,
  },
});
