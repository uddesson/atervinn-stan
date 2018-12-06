import React from 'react';
import { View, StyleSheet } from 'react-native';
import { utilityStyles } from './utilityStyles';
import { colors } from './colors';
import { Paragraph } from './Types';

export const HomeMessage = () => {
  return (
    <View style={[styles.container, utilityStyles.fullWidth]}>
      <Paragraph
        style={[
          styles.message,
          utilityStyles.whiteText,
          utilityStyles.centerText,
        ]}
      >
        Osäker på hur du ska sortera ditt skräp? Vår sökfunktion hjälper dig.
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
