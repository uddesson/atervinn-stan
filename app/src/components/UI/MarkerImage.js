// @flow

import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { colors } from './colors';

type Props = {
  type: string,
};
export const MarkerImage = (props: Props) => {
  const { type } = props;

  return <Image source={{ uri: type }} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    height: 70,
    width: 60,
    resizeMode: 'contain',
    shadowColor: colors.lightGrey,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 2,
    shadowOpacity: 0.9,
  },
});
