import React from 'react';
import Svg, { G, Path, Polygon } from 'react-native-svg';

export const SadIcon = (props) => {
  const { width, height, fill } = props;
  return (
    <Svg width={width} height={height}>
      <G fill="none" stroke={fill} strokeWidth={2} strokeMiterlimit={10}>
        <Path d="M18 20h2M46 20h-2M32 47h31V5H1v42h17v12z" />
      </G>
      <Path
        fill="none"
        stroke={fill}
        strokeWidth={2}
        strokeMiterlimit={10}
        d="M40 38a8 8 0 0 0-16 0"
      />
    </Svg>
  );
};

export const HeartIcon = (props) => {
  const { width, height, fill } = props;
  return (
    <Svg width={width} height={height} {...props}>
      <Path
        fill="none"
        stroke={fill}
        strokeWidth={2}
        strokeMiterlimit={10}
        d="M32 47h31V5H1v42h17v12z"
      />
      <Path
        fill="none"
        stroke={fill}
        strokeWidth={2}
        strokeMiterlimit={10}
        d="M22 23c0 6.666 10 12 10 12s10-5.334 10-12c0-2.762-2-5-5-5a5 5 0 0 0-5 5 5 5 0 0 0-5-5c-3 0-5 2.238-5 5z"
      />
    </Svg>
  );
};
