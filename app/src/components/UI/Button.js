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
      style={[styles.button, utilityStyles.row, utilityStyles.center]}
      activeOpacity={0.7}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  paragraph: {
    marginTop: 5,
  },
  button: {
    backgroundColor: colors.darkGreen,
    borderRadius: 5,
    padding: 15,
    width: '100%',
    height: 50,
  },
  buttonText: {
    marginRight: 10,
  },
});
