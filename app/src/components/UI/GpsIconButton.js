// @flow

import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from './colors';
import { utilityStyles } from './utilityStyles';
import { GpsIcon } from './Icons';

type Props = {
  onPress: Function,
};

export const GpsIconButton = (props: Props) => {
  const { onPress } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      style={[utilityStyles.absolute, utilityStyles.center, styles.container]}
    >
      <GpsIcon height={70} width={70} fill={colors.white} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    bottom: '5%',
    right: '5%',
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    shadowColor: colors.lightGrey,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 2,
    shadowOpacity: 0.8,
  },
});
