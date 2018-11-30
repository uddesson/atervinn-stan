//@flow

import React from 'react';
import { TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { ParagraphBold } from './Types';
import { utilityStyles } from './utilityStyles';
import { colors } from './colors';

type Props = {
  url: string,
  children: string,
  style: {},
};

export const ExternalLink = (props: Props) => {
  const { url, children, style } = props;

  const onPress = () =>
    Linking.canOpenURL(url).then(() => {
      Linking.openURL(url);
    });

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[utilityStyles.row, styles.button]}
    >
      <ParagraphBold style={style}>{children}</ParagraphBold>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: colors.darkGreen,
    color: colors.darkGreen,
    borderRadius: 5,
    padding: 5,
  },
});
