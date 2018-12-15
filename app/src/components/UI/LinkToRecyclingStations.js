//@flow
import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import {
  utilityStyles,
  ParagraphBold,
  ExternalLink,
  ExternalLinkIcon,
} from '.';

export const LinkToRecyclingStations = () => {
  return (
    <TouchableOpacity style={[styles.button, utilityStyles.center]}>
      <ExternalLink url={externalUrl}>
        <ParagraphBold
          style={[
            utilityStyles.whiteText,
            utilityStyles.uppercaseText,
            styles.buttonText,
          ]}
        >
          Hitta central
        </ParagraphBold>
        <ExternalLinkIcon height={20} width={20} fill={colors.white} />
      </ExternalLink>
    </TouchableOpacity>
  );
};
