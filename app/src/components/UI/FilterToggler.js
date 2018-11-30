//@flow
import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { colors } from './colors';

type Props = {
  isFtiContainerVisible: boolean,
  isModuleVisible: boolean,
  handleFtiContainerToggling: () => boolean,
  handleModuleToggling: () => boolean,
};

export const FilterToggler = (props: Props) => {
  const {
    isFtiContainerVisible,
    isModuleVisible,
    handleFtiContainerToggling,
    handleModuleToggling,
  } = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleFtiContainerToggling}>
        <Image
          style={[
            styles.icon,
            isFtiContainerVisible ? styles.active : styles.inactive,
          ]}
          source={{ uri: 'fti-container' }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleModuleToggling}>
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
    backgroundColor: colors.whiteSmoke,
    position: 'absolute',
    top: '8%',
    left: '5%',
    padding: 10,
    borderRadius: 5,
    shadowColor: colors.lightGrey,
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
