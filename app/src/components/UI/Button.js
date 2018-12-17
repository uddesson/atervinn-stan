//@flow
import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { utilityStyles, ParagraphBold, ExternalLink, colors } from '.';

type Props = {
  onPress?: Function,
  children: React$Element<any>,
};

export const Button = (props: Props) => {
  const { onPress, children } = props;
  return (
    <TouchableOpacity
      style={[
        styles.button,
        utilityStyles.row,
        utilityStyles.center,
        utilityStyles.justifyAround,
      ]}
      activeOpacity={0.7}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.green,
    borderRadius: 5,
    paddingVertical: 25,
    paddingHorizontal: 60,
    width: '100%',
    height: 70,
  },
});
