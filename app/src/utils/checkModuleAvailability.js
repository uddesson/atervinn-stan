//@flow
import React from 'react';
import moment from 'moment';
import twix from 'twix';

/*
 * The modules are out in the public from 04/01 until 10/31,
 * so we set a date range between these dates and then check
 * if the current date is found in the range. If its found, ie
 * isCurrent returns true its summertime and the modules are out.
 *
 * Regarding date format: moment does NOT allow dates in MM-DD or MM/DD.
 */

export const checkModuleAvailability = () => {
  return moment('04 01', 'MM DD')
    .twix('10 31', 'MM DD')
    .isCurrent();
};
