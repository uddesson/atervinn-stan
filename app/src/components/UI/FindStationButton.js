//@flow
import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import {
  utilityStyles,
  ParagraphBold,
  ExternalLink,
  ExternalLinkIcon,
} from '.';

type Props = {
  navigation: NavigationScreenProps,
};

const FindStationButton = (props: Props) => {
  const { navigation } = props;
  return (
    <TouchableOpacity
      style={[styles.button, utilityStyles.row, utilityStyles.center]}
      activeOpacity={0.7}
      onPress={() => navigation.navigate('Map')}
    >
      <ParagraphBold
        style={[utilityStyles.whiteText, utilityStyles.uppercaseText]}
      >
        Hitta station
      </ParagraphBold>
      <GpsIcon height={50} width={50} fill={colors.white} />
    </TouchableOpacity>
  );
};
