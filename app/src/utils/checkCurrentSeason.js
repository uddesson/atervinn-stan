//@flow
import React from 'react';
import moment from 'moment';
import twix from 'twix';

/*
 * Function looks at current date and match the the date ranges representing seasons
 * and returns a string which is used as a image url.
 */
export const checkCurrentSeason = () => {
  const spring = moment('03 01', 'MM DD').twix('05 31', 'MM DD');
  const summer = moment('06 01', 'MM DD').twix('08 31', 'MM DD');
  const fall = moment('09 01', 'MM DD').twix('11 30', 'MM DD');
  const winter = moment('12 01', 'MM DD').twix('02 28', 'MM DD');

  if (spring.isCurrent()) {
    return 'spring';
  } else if (summer.isCurrent()) {
    return 'summer';
  } else if (fall.isCurrent()) {
    return 'fall';
  } else {
    return 'winter';
  }
};
