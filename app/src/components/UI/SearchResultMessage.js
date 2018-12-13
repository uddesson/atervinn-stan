//@flow
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Paragraph, colors, utilityStyles } from '.';

type Props = {
  type: string,
};

export const SearchResultMessage = (props: Props) => {
  const { type } = props;
  const message =
    type === 'no-results'
      ? `Vi hittar tyvärr inte det du söker i vår databas. Det betyder dock inte att det inte går att återvinna!`
      : `Ops! Något har gått snett – kan inte hämta resultat just nu.`;

  return (
    <View style={styles.container}>
      <Paragraph style={[styles.message, utilityStyles.lineHeightNormal]}>{message}</Paragraph>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: '10%',
  },
  message: {
    margin: 8,
    textAlign: 'center',
  },
});
