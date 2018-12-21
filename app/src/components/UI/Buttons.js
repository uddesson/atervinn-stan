//@flow
import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import {
  utilityStyles,
  ParagraphBold,
  ExternalLink,
  colors,
  CancelIcon,
  GpsIcon,
} from '.';

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

export const CloseButton = (props: Props) => {
  const { onPress } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <CancelIcon width={20} height={20} fill={colors.blue} />
    </TouchableOpacity>
  );
};

export const GpsIconButton = (props: Props) => {
  const { onPress } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      style={[
        utilityStyles.absolute,
        utilityStyles.center,
        utilityStyles.boxShadow,
        styles.buttonRound,
      ]}
    >
      <GpsIcon height={70} width={70} fill={colors.white} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.green,
    borderRadius: 6,
    padding: 12,
  },
  buttonRound: {
    backgroundColor: colors.blue,
    bottom: '2%',
    right: '4%',
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
});
