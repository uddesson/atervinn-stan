//@flow
import { colors } from '../components/UI';

/*
 * In the mapmodal we use circles with colors representing what
 * kind of recycling options the offer which we calclulate from
 * the option name.
 */

export const getSortingColor = (category: string): string => {
  switch (category) {
    case 'papper':
      return colors.ftiYellow;
    case 'plast':
      return colors.ftiOrange;
    case 'glas':
      return colors.ftiGreen;
    case 'metall':
      return colors.ftiGrey;
    case 'tidningar':
      return colors.ftiBlue;
    case 'farligt avfall':
      return colors.red;
    default:
      return colors.black;
  }
};
