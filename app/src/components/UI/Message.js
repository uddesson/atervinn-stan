//@flow
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Paragraph } from './Types';
import { HeartIcon } from './Icons';
import { colors } from './colors';
import { utilityStyles } from './utilityStyles';

type Props = {
  type: string,
};

export const Message = (props: Props) => {
  const { type } = props;

  const renderMessage = () => {
    if (type === 'no results') {
      return (
        <>
          <Paragraph style={styles.message}>
            Vi hittar tyvärr inte det du söker i vår databas. Det betyder dock
            inte att det inte går att återvinna!
          </Paragraph>
          <HeartIcon width={50} height={50} fill={colors.red} />
        </>
      );
    } else if (type === 'examples') {
      /* 
        TODO: render som examples.
      */
      return <Paragraph>Exempel på sökord</Paragraph>;
    }
  };

  return <View style={utilityStyles.center}>{renderMessage()}</View>;
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
  },
  message: {
    margin: 8,
  },
});
