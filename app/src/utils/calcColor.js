//@flow

import React from 'react';
import { colors } from '../components/UI';

export const calcColor = (category: string): string => {
  switch (category) {
    case 'pappersförpackning':
      return colors.ftiYellow;
    case 'plastförpackning':
      return colors.ftiOrange;
    case 'glasförpackningar':
      return colors.ftiGreen;
    case 'metall':
      return colors.ftiGrey;
    case 'metallförpackning':
    case 'metall':
      return colors.ftiGrey;
    case 'tidning_returpapper':
      return colors.ftiBlue;
    default:
      return colors.ftiBlack;
  }
};
