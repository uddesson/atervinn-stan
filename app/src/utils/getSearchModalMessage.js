//@flow
import React from 'react';
import { moduleSorting, ftiStationSorting } from './sortingTypes';

export const getSearchModalMessage = (sortingType: string, title: string) => {
  /* 
    if sortingType matches moduleSorting and/or ftiStationSorting
    it can be recycled at the stations we map out.
  */
  const moduleSortingAvailable = moduleSorting.includes(sortingType);
  const ftiStationSortingAvailable = ftiStationSorting.includes(sortingType);

  const availableMessage =
    'Kan återvinnas i stan, både på en modul och på en fti station och sorteras som';
  const moduleMessage = 'Kan återvinnas i stan vid en modul och sorteras som';
  const ftiMessage = 'Kan återvinnas i stan vid en fti station och sorteras som';
  const unavailableMessage = 'Måste återvinnas på återvinningscentral och sorteras där som';

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
