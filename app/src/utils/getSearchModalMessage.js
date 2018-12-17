//@flow
import React from 'react';
import { moduleSorting, ftiStationSorting } from '../assets';

export const getSearchModalMessage = (sortingType: string) => {
  /*
   *  If sortingType matches moduleSorting and/or ftiStationSorting
   *  it can be recycled at the stations we map out.
   */
  const moduleSortingAvailable = moduleSorting.includes(sortingType);
  const ftiStationSortingAvailable = ftiStationSorting.includes(sortingType);

  const availableMessage = `Kan återvinnas i stan, både på en modul och på en fti station och sorteras som ${sortingType}`;
  const moduleMessage = `Kan återvinnas i stan vid en modul och sorteras som ${sortingType}`;
  const ftiMessage = `Kan återvinnas i stan vid en fti station och sorteras som ${sortingType}`;
  const unavailableMessage = `Måste återvinnas på återvinningscentral och sorteras där som ${sortingType}`;

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
