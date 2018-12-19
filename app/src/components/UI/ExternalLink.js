//@flow
import React from 'react';
import { TouchableOpacity, Linking } from 'react-native';

type Props = {
  url: string,
  children: React$Element<any>,
  style: Object,
};

export const ExternalLink = (props: Props) => {
  const { url, children, style } = props;

  const onPress = () =>
    Linking.canOpenURL(url).then(() => {
      Linking.openURL(url);
    });

  return (
    <TouchableOpacity onPress={onPress} style={style} activeOpacity={0.7}>
      {children}
    </TouchableOpacity>
  );
};
