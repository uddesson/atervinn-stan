//@flow
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { utilityStyles } from './utilityStyles';
import { colors } from './colors';
import { Paragraph } from './Types';

type Props = {
  children: string,
};

/*
 * Component which presents a message on a black card.
 * Mainly used on the homescreen.
 */

/* Should this have a more generic name for scaleability? */
export const HomeMessage = (props: Props) => {
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
