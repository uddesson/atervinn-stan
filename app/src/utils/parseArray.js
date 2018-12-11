//@flow

export const parseArray = (arr: string[]) => {
  if (arr.length === 0) {
    return '';
  } else if (arr.length === 1) {
    return arr[0] + '.';
  } else if (arr.length === 2) {
    return arr[0] + ' och ' + arr[1] + '.';
  } else {
    return (
      arr.slice(0, arr.length - 2).join(', ') +
      ' ' +
      arr[arr.length - 2] +
      ' och ' +
      arr[arr.length - 1] +
      '.'
    );
  }
};
