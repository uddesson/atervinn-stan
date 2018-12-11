//@flow
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Paragraph } from './Types';

type Props = {
  type: string,
};

export const Message = (props: Props) => {
  const { type } = props;
  const examples = 'Ett sökord kan t.ex. vara...';
  const error = 'Vi hittar tyvärr inte det du söker.';
  const message = type === 'examples' ? examples : error;

  const externalUrl = 'https://tinyurl.com/y99gjgz4';
  return (
    <View>
      <Paragraph>{message}</Paragraph>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
  },
});
