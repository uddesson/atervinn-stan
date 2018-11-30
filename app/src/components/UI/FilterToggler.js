//@flow
import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { colors } from './colors';

type Props = {
  isFtiContainerVisible: boolean,
  isModuleVisible: boolean,
  onFtiContainerPress: () => boolean,
  onModulePress: () => boolean,
};

export const FilterToggler = (props: Props) => {
  const {
    isFtiContainerVisible,
    isModuleVisible,
    onFtiContainerPress,
    onModulePress,
  } = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onFtiContainerPress}>
        <Image
          style={[
            styles.icon,
            isFtiContainerVisible ? styles.active : styles.inactive,
          ]}
          source={{ uri: 'fti-container' }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={onModulePress}>
        <Image
          style={[
            styles.icon,
            isModuleVisible ? styles.active : styles.inactive,
          ]}
          source={{ uri: 'module' }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    position: 'absolute',
    top: '8%',
    left: '5%',
    padding: 10,
    borderRadius: 5,
    shadowColor: colors.lightGrey,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 2,
    shadowOpacity: 0.8,
  },
  icon: {
    width: 20,
    height: 30,
    position: 'relative',
  },
  inactive: {
    opacity: 0.2,
  },
  active: {
    opacity: 1,
  },
});
