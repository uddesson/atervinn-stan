import React from 'react';
import Svg, { G, Path, Polygon, Circle, Line } from 'react-native-svg';

export const SadIcon = props => {
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

export const HeartIcon = props => {
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

export const SearchIcon = props => {
  const { width, height, fill } = props;

  return (
    <Svg
      width={width}
      height={height}
      fill="none"
      stroke={fill}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Circle cx="11" cy="11" r="8" />
      <Line x1="21" y1="21" x2="16.65" y2="16.65" />
    </Svg>
  );
};

export const MapIcon = props => {
  const { width, height, fill } = props;

  return (
    <Svg
      width={width}
      height={height}
      fill="none"
      stroke={fill}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <Circle cx="12" cy="10" r="3" />
    </Svg>
  );
};

export const InfoIcon = props => {
  const { width, height, fill } = props;

  return (
    <Svg
      width={width}
      height={height}
      fill="none"
      stroke={fill}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Circle cx="12" cy="12" r="10" />
      <Line x1="12" y1="16" x2="12" y2="12" />
      <Line x1="12" y1="8" x2="12" y2="8" />
    </Svg>
  );
};

export const GpsIcon = props => {
  const { width, height, fill } = props;

  return (
    <Svg
      width={width}
      height={height}
      fill={fill}
      stroke={fill}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Polygon points="3 11 22 2 13 21 11 13 3 11" />
    </Svg>
  );
};
