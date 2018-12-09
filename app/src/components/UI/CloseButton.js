// @flow
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { colors, CancelIcon } from '.';

type Props = {
  onPress: Function,
};

export const CloseButton = (props: Props) => {
  const { onPress } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <CancelIcon width={20} height={20} fill={colors.blue} />
    </TouchableOpacity>
  );
};
