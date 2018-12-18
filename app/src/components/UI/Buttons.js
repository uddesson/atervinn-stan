//@flow
import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { utilityStyles, ParagraphBold, ExternalLink, colors } from '.';

type Props = {
  onPress?: Function,
  url?: string,
  children: React$Element<any>,
};

export const Button = (props: Props) => {
  const { onPress, children } = props;
  return (
    <TouchableOpacity
      style={[
        utilityStyles.row,
        utilityStyles.center,
        utilityStyles.fullWidth,
        styles.button,
      ]}
      activeOpacity={0.7}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};

export const ExternalLinkButton = (props: Props) => {
  const { url, children } = props;
  return (
    <ExternalLink
      url={url}
      style={[
        utilityStyles.row,
        utilityStyles.center,
        utilityStyles.fullWidth,
        styles.button,
      ]}
    >
      {children}
    </ExternalLink>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.green,
    borderRadius: 5,
    padding: 25,
    height: 70,
  },
});
