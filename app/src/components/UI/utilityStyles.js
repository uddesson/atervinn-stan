import { StyleSheet } from 'react-native';

export const utilityStyles = StyleSheet.create({
  flex: {
    display: 'flex',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  whiteText: {
    color: 'white',
  },
  capitalizeText: {
    textTransform: 'capitalize',
  },
});
