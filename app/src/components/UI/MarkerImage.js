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

  return (
    /*
     * This could probably be a bit more DRY, however it was not possible to
     * make a tenerary inside style prop since it would then apply to both markers
     */
    <>
      {isModule ? (
        <Image
          source={{ uri: type }}
          style={[
            utilityStyles.boxShadow,
            styles.image,
            isAvailable ? styles.active : styles.inactive,
          ]}
        />
      ) : (
        <Image
          source={{ uri: type }}
          style={[utilityStyles.boxShadow, styles.image]}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 70,
    width: 60,
    resizeMode: 'contain',
  },
  active: {
    opacity: 1,
  },
  inactive: {
    opacity: 0.7,
  },
});
