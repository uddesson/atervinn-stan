//@flow
import React from 'react';
import moment from 'moment';
import twix from 'twix';

/*
 * Function looks at current date and match the the date ranges representing seasons
 * and returns a string whitch is used as a image url
 */
export const checkCurrentSeason = () => {
  // Uncomment and replace to test
  //const today = moment('2018 12 02');

  const spring = moment('03 01', 'MM DD')
    .twix('05 31', 'MM DD')
    .isCurrent();
  //.contains(today);

  const summer = moment('06 01', 'MM DD')
    .twix('08 31', 'MM DD')
    .isCurrent();
  //.contains(today);

  const fall = moment('09 01', 'MM DD')
    .twix('11 30', 'MM DD')
    .isCurrent();
  //.contains(today);

  const winter = moment('12 01', 'MM DD')
    .twix('02 28', 'MM DD')
    .isCurrent();
  //.contains(today);

  if (spring) {
    return 'spring';
  } else if (summer) {
    return 'summer';
  } else if (fall) {
    return 'fall';
  } else {
    return 'winter';
  }
};
