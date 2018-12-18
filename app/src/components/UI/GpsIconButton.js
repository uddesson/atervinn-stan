// @flow

import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { colors, utilityStyles, GpsIcon } from '.';

type Props = {
  onPress: () => void,
};

export const GpsIconButton = (props: Props) => {
  const { onPress } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      style={[
        utilityStyles.absolute,
        utilityStyles.center,
        utilityStyles.boxShadow,
        styles.container,
      ]}
    >
      <GpsIcon height={70} width={70} fill={colors.white} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    bottom: '2%',
    right: '4%',
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
});
