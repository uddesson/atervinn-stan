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

  const availableMessage = `Kan återvinnas i stan, både vid modul och FTI Station. Sorteras som ${sortingType}.`;
  const moduleMessage = `Kan återvinnas i stan vid en modul och sorteras som ${sortingType}.`;
  const ftiMessage = `Kan återvinnas i stan vid en FTI Station och sorteras som ${sortingType}.`;
  const unavailableMessage = `Går inte att återvinna vid någon av modulerna i stan, utan måste återvinnas på en större återvinninscentral. Sorteras där som ${sortingType}. 
  
Klicka på “Visa centraler” för att komma till en lista av adresser till alla Återvinningscentraler i Stockholm.`;

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
