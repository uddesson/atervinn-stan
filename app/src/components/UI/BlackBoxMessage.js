//@flow
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { utilityStyles, colors, Paragraph } from '.';

type Props = {
  children: string,
};

/*
 * Component which presents a message on a black card.
 * Mainly used on the homescreen.
 */

export const BlackBoxMessage = (props: Props) => {
  const { children } = props;
  return (
    <View style={[styles.container, utilityStyles.fullWidth]}>
      <Paragraph
        style={[
          styles.message,
          utilityStyles.whiteText,
          utilityStyles.centerText,
        ]}
      >
        {children}
      </Paragraph>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.transparentBlack,
    borderRadius: 6,
    padding: 10,
  },
  message: {
    lineHeight: 30,
    fontSize: 16,
  },
});
