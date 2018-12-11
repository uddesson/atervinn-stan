// @flow
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { colors } from './colors';
import { utilityStyles } from './utilityStyles';

type Props = {
  type: string,
};
export const MarkerImage = (props: Props) => {
  const { type } = props;

  return (
    <Image
      source={{ uri: type }}
      style={[utilityStyles.boxShadow, styles.image]}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    height: 70,
    width: 60,
    resizeMode: 'contain',
  },
});
