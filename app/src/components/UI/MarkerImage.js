// @flow
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { utilityStyles } from './utilityStyles';
import { checkModuleAvailability } from '../../utils';

type Props = {
  type: string,
};

export const MarkerImage = (props: Props) => {
  const { type } = props;
  const isModule = type === 'pin-module' ? true : false;
  const isAvailable = checkModuleAvailability();

  const getImageUri = () => {
    if (isModule) {
      if (isAvailable) {
        return 'pin-module';
      }
      return 'pin-module-disabled';
    } else {
      return 'pin-fti-container';
    }
  };

  return (
    <Image
      source={{ uri: getImageUri() }}
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
