//@flow

/*
 * Parser which allow you to pass in an sorting array from a position
 * and format to human readable format.
 *
 * an sorting array from an FTI Station position will be passed like this
 * ["glas", "papper", "metall", "plast", "tidningar"] and formatted into:
 * glas, papper, metall, plast och tidiningar
 */

export const arrayParser = (arr: string[]) => {
  if (arr.length === 0) {
    return '';
  } else if (arr.length === 1) {
    return arr[0] + '.';
  } else if (arr.length === 2) {
    return arr[0] + ' och ' + arr[1] + '.';
  } else {
    return (
      arr.slice(0, arr.length - 1).join(', ') +
      ' och ' +
      arr[arr.length - 1] +
      '.'
    );
  }
};
