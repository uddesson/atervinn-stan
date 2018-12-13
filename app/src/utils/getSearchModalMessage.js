//@flow
import React from 'react';
import { moduleSorting, ftiStationSorting } from './sortingTypes';

export const getSearchModalMessage = (sortingType: string, title: string) => {
  /*
   *  If sortingType matches moduleSorting and/or ftiStationSorting
   *  it can be recycled at the stations we map out.
   */
  const moduleSortingAvailable = moduleSorting.includes(sortingType);
  const ftiStationSortingAvailable = ftiStationSorting.includes(sortingType);

  const availableMessage = `${title} kan återvinnas i stan, både på en modul och på en fti station och sorteras som ${sortingType}`;
  const moduleMessage = `${title} kan återvinnas i stan vid en modul och sorteras som ${sortingType}`;
  const ftiMessage = `${title} Kan återvinnas i stan vid en fti station och sorteras som ${sortingType}`;
  const unavailableMessage = `${title} måste återvinnas på återvinningscentral och sorteras där som ${sortingType}`;

  if (moduleSortingAvailable && ftiStationSortingAvailable) {
    return availableMessage;
  } else if (moduleSortingAvailable) {
    return moduleMessage;
  } else if (ftiStationSortingAvailable) {
    return ftiMessage;
  } else {
    return unavailableMessage;
  }
};
