//@flow
import React from 'react';
import { TouchableOpacity, Linking } from 'react-native';
import { utilityStyles } from './utilityStyles';

type Props = {
  url: string,
  children: React$Element<any>,
  styles: Object,
};

export const ExternalLink = (props: Props) => {
  const { url, children, styles } = props;

  const onPress = () =>
    Linking.canOpenURL(url).then(() => {
      Linking.openURL(url);
    });

  return (
    <TouchableOpacity onPress={onPress} style={[utilityStyles.row, styles]}>
      {children}
    </TouchableOpacity>
  );
};
