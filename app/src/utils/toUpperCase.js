//@flow

import React from 'react';

export const toUpperCase = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
