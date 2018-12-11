import React from 'react';
import { moduleSorting, ftiStationSorting } from './sortingTypes';

export const getSearchModalMessage = (sortingType: string) => {
  const moduleSortingAvailable = moduleSorting.includes(sortingType);
  const ftiStationSortingAvailable = ftiStationSorting.includes(sortingType);

  const messageIfBothAvailable =
    'Kan återvinnas i stan, både på en modul och på en fti station och sorteras som';
  const messageIfModule = 'Kan återvinnas i stan vid en modul och sorteras som';
  const messageIfFti = 'Kan återvinnas i stan vid en fti station och sorteras som';
  const messageIfUnavailable = 'Måste återvinnas på återvinningscentral och sorteras där som';

  if (moduleSortingAvailable && ftiStationSortingAvailable) {
    return messageIfBothAvailable;
  } else if (moduleSortingAvailable) {
    return messageIfModule;
  } else if (ftiStationSortingAvailable) {
    return messageIfFti;
  } else {
    return messageIfUnavailable;
  }
};
