import React from 'react';
import { Text, StyleSheet } from 'react-native';

export const Heading = ({ style, ...props }) => {
  return <Text style={[styles.heading, style]} {...props} />;
};

export const SubHeading = ({ style, ...props }) => {
  return <Text style={[styles.subHeading, style]} {...props} />;
};

export const Paragraph = ({ style, ...props }) => {
  return <Text style={[styles.paragraph, style]} {...props} />;
};

export const ParagraphBold = ({ style, ...props }) => {
  return <Text style={[styles.paragraph, styles.bold, style]} {...props} />;
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
});
