// @flow
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Pulse } from './Pulse';
import { colors } from './colors';

// Component accepts optional style prop if needed for positioning.
type Props = {
  style: ?Object,
};

export const CurrentLocation = (props: Props) => {
  const { style } = props;

  return (
    <View style={style}>
      <Pulse
        size={10}
        pulseMaxSize={120}
        interval={2000}
        backgroundColor={colors.blue}
        borderColor={colors.darkBlue}
        icon={<View style={styles.filledCircle} />}
      />
    </View>
  );
};

CurrentLocation.defaultProps = {
  style: {},
};

const styles = StyleSheet.create({
  filledCircle: {
    height: 20,
    width: 20,
    borderRadius: 20 / 2,
    backgroundColor: colors.blue,
    borderWidth: 2,
    borderColor: 'white',
  },
});
