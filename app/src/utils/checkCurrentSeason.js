//@flow
import React from 'react';
import moment from 'moment';
import twix from 'twix';

/*
 * Function looks at current date and match the the date ranges representing seasons
 * and returns a string which is used as a image url.
 *
 * NOTE: if possible we want to avoid years in range to make it more dynamic but its
 * not possible right now. Consider vanilla js for this.
 */
export const checkCurrentSeason = () => {
  const currentDate = moment().format('YYYY MM DD');
  //const fakeDate = moment('2018 06 11');

  const spring = moment('2019 03 01', 'YYYY MM DD')
    .twix('2018 05 31', 'YYYY MM DD')
    .isCurrent();
  //.contains(fakeDate);

  const summer = moment('2019 06 01', 'YYYY MM DD')
    .twix('2018 08 31', 'YYYY MM DD')
    .isCurrent();
  //.contains(fakeDate);

  const fall = moment('2019 09 01', 'YYYY MM DD')
    .twix('2018 11 30', 'YYYY MM DD')
    .isCurrent();
  //.contains(fakeDate);

  const winter = moment('2018 12 01', 'YYYY MM DD')
    .twix('2019 02 28', 'YYYY MM DD')
    .isCurrent();
  //.contains(fakeDate);

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
