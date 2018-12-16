//@flow
import React from 'react';
import { TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { utilityStyles, colors } from '.';

type Props = {
  url: string,
  children: React$Element<any>,
};

export const ExternalLink = (props: Props) => {
  const { url, children } = props;

  const onPress = () =>
    Linking.canOpenURL(url).then(() => {
      Linking.openURL(url);
    });

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        utilityStyles.row,
        utilityStyles.center,
        utilityStyles.justifyAround,
        styles.button,
      ]}
    >
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  // this is used in 2 files, create utilityclass?
  button: {
    backgroundColor: colors.green,
    borderRadius: 5,
    paddingVertical: 25,
    paddingHorizontal: 60,
    width: '100%',
    height: 70,
  },
});
