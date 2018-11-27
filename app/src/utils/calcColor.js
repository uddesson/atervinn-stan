import React from 'react';
import { colors } from '../components/UI';

export const calcColor = category => {
  switch (category) {
    case 'Plastförpackning':
      return colors.ftiYellow;
    case 'Glasförpackningar':
      return colors.ftiGreen;
    case 'Metall':
      return colors.ftiGrey;
    case 'Metallförpackning':
      return colors.ftiGrey;
    case 'Tidning/Returpapper':
      return colors.ftiBlue;
    default:
      return colors.ftiBrown;
  }
};
