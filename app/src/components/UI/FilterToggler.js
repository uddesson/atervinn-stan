//@flow
import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { colors } from './colors';
import { utilityStyles } from './utilityStyles';

type Props = {
  isFtiContainerVisible: boolean,
  isModuleVisible: boolean,
  onFtiContainerPress: () => void,
  onModulePress: () => void,
};

export const FilterToggler = (props: Props) => {
  const {
    isFtiContainerVisible,
    isModuleVisible,
    onFtiContainerPress,
    onModulePress,
  } = props;

  return (
    <View
      style={[
        styles.container,
        utilityStyles.col,
        utilityStyles.justifyBetween,
        utilityStyles.itemsCenter,
        utilityStyles.absolute,
        utilityStyles.boxShadow,
      ]}
    >
      <TouchableOpacity onPress={onFtiContainerPress}>
        <Image
          style={[
            styles.iconSmall,
            utilityStyles.relative,
            isFtiContainerVisible ? styles.active : styles.inactive,
          ]}
          source={{ uri: 'fti-container' }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={onModulePress}>
        <Image
          style={[
            styles.icon,
            utilityStyles.relative,
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
    top: '5%',
    left: '3%',
    width: 65,
    height: 110,
    padding: 10,
    borderRadius: 5,
  },
  icon: {
    width: 40,
    height: 50,
  },
  iconSmall: {
    width: 45,
    height: 35,
  },
  inactive: {
    opacity: 0.2,
  },
  active: {
    opacity: 1,
  },
});
