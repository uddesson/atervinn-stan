// @flow
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { utilityStyles } from '../components/UI';
import { moduleSorting, ftiStationSorting } from '../assets';

/*
 * Returns an image of either an module or an FTI Station depending
 * on if the item it receives can be recycled at one or both.
 */

export const getStationSymbol = (sortingType: string) => {
  const type = sortingType.toLowerCase();

  const moduleSymbol = (
    <Image style={styles.image} source={{ uri: 'module' }} />
  );

  const ftiContainerSymbol = (
    <Image
      style={[styles.imageSmall, utilityStyles.alignSelfEnd]}
      source={{ uri: 'fti-container' }}
    />
  );

  if (moduleSorting.includes(type) && ftiStationSorting.includes(type)) {
    return (
      <>
        {moduleSymbol}
        {ftiContainerSymbol}
      </>
    );
  } else if (moduleSorting.includes(type)) {
    return moduleSymbol;
  } else if (ftiStationSorting.includes(type)) {
    return ftiContainerSymbol;
  }
};

const styles = StyleSheet.create({
  imageSmall: {
    width: 40,
    height: 30,
  },
  image: {
    width: 30,
    height: 35,
  },
});
