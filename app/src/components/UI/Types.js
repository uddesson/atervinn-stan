//@flow
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { colors, utilityStyles } from '.';

type TextProps = React$ElementProps<typeof Text>;

export const Heading = ({ style, ...props }: TextProps) => {
  return (
    <Text
      style={[
        styles.jaldi,
        styles.fontSizeBig,
        styles.bold,
        styles.black,
        style,
      ]}
      {...props}
    />
  );
};

export const SubHeading = ({ style, ...props }: TextProps) => {
  return (
    <Text
      style={[styles.jaldi, styles.fontSizeMedium, styles.black, style]}
      {...props}
    />
  );
};

export const Paragraph = ({ style, ...props }: TextProps) => {
  return (
    <Text
      style={[styles.roboto, styles.fontSizeSmall, styles.black, style]}
      {...props}
    />
  );
};

export const ParagraphBold = ({ style, ...props }: TextProps) => {
  return (
    <Text
      style={[
        styles.roboto,
        styles.fontSizeSmall,
        styles.bold,
        styles.black,
        style,
      ]}
      {...props}
    />
  );
};

export const ButtonLabel = ({ style, ...props }: TextProps) => {
  return (
    <Text
      style={[
        styles.fontSizeMedium,
        styles.jaldi,
        styles.bold,
        styles.black,
        utilityStyles.uppercaseText,
        utilityStyles.whiteText,
        style,
      ]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  jaldi: {
    fontFamily: 'Jaldi',
  },
  roboto: {
    fontFamily: 'Roboto',
  },
  fontSizeSmall: {
    fontSize: 18,
  },
  fontSizeMedium: {
    fontSize: 24,
  },
  fontSizeBig: {
    fontSize: 32,
  },
  bold: {
    fontWeight: '700',
  },
  black: {
    color: colors.black,
  },
});
