//@flow
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { colors } from './colors';

type TextProps = React$ElementProps<typeof Text>;

export const Heading = ({ style, ...props }: TextProps) => {
  return <Text style={[styles.heading, styles.black, style]} {...props} />;
};

export const SubHeading = ({ style, ...props }: TextProps) => {
  return <Text style={[styles.subHeading, styles.black, style]} {...props} />;
};

export const Paragraph = ({ style, ...props }: TextProps) => {
  return <Text style={[styles.paragraph, styles.black, style]} {...props} />;
};

export const ParagraphBold = ({ style, ...props }: TextProps) => {
  return (
    <Text
      style={[styles.paragraph, styles.bold, styles.black, style]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  heading: {
    fontFamily: 'Jaldi',
    fontSize: 32,
    fontWeight: '700',
  },
  subHeading: {
    fontSize: 24,
  },
  paragraph: {
    fontFamily: 'Roboto',
    fontSize: 18,
  },
  bold: {
    fontWeight: '700',
  },
  black: {
    color: colors.black,
  },
});
