//@flow

/*
 * In cases where data is used as titles which should be capitalized
 * and the data is longer than one word this util is used instead of
 * the utlilityStyle capitalizeText.
 */

export const toUpperCase = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
