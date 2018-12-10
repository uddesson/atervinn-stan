import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { utilityStyles } from '../components/UI';

export const getStationSymbol = (sortingType: string) => {
  const type = sortingType.toLowerCase();

  const moduleSorting = [
    'pappersförpackning',
    'plastförpackning',
    'glasförpackning',
    'metallförpackning',
    'ovrigt',
  ];

  const ftiStationSorting = [
    'pappersförpackning',
    'plastförpackning',
    'glasförpackning',
    'metallförpackning',
    'tidning/returpapper',
  ];

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
