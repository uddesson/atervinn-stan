// @flow

import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from './colors';
import { utilityStyles } from './utilityStyles';
import { GpsIcon } from './Icons';

// TODO: Toggle user location on press
export const GpsIconButton = () => (
  <TouchableOpacity
    activeOpacity={0.7}
    style={[utilityStyles.absolute, utilityStyles.center, styles.container]}
  >
    <GpsIcon height={25} width={25} fill={colors.blue} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    bottom: '5%',
    right: '5%',
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
    shadowColor: colors.lightGrey,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 2,
    shadowOpacity: 0.8,
  },
});
