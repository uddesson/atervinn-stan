import React from 'react';
import Svg, {
  G, Path, Polygon, Circle, Line,
} from 'react-native-svg';

export const SadIcon = (props) => {
  const { width, height, fill } = props;

  return (
    <Svg
      version="1.1"
      x="0px"
      y="0px"
      width={width}
      height={height}
      viewBox="0 0 64 64"
      enable-background="new 0 0 64 64"
    >
      <G>
        <Line
          fill="none"
          stroke={fill}
          stroke-width="2"
          stroke-miterlimit="10"
          x1="18"
          y1="20"
          x2="20"
          y2="20"
        />
        <Line
          fill="none"
          stroke={fill}
          stroke-width="2"
          stroke-miterlimit="10"
          x1="46"
          y1="20"
          x2="44"
          y2="20"
        />
        <Polygon
          fill="none"
          stroke={fill}
          stroke-width="2"
          stroke-miterlimit="10"
          points="32,47 63,47 63,5 1,5 1,47 18,47 18,59"
        />
      </G>
      <Path
        fill="none"
        stroke={fill}
        stroke-width="2"
        stroke-miterlimit="10"
        d="M40,38c0-4.418-3.582-8-8-8s-8,3.582-8,8"
      />
    </Svg>
  );
};

export const HeartIcon = (props) => {
  const { width, height, fill } = props;

  return (
    <Svg
      version="1.1"
      x="0px"
      y="0px"
      width={width}
      height={height}
      viewBox="0 0 64 64"
      enable-background="new 0 0 64 64"
    >
      <Polygon
        fill="none"
        viewBox="0 0 24 24"
        stroke={fill}
        stroke-width="2"
        stroke-miterlimit="10"
        points="32,47 63,47 63,5 1,5 1,47 18,47 18,59 "
      />
      <Path
        fill="none"
        stroke={fill}
        stroke-width="2"
        stroke-miterlimit="10"
        d="M22,23c0,6.666,10,12,10,12s10-5.334,10-12
	c0-2.762-2-5-5-5c-2.762,0-5,2.238-5,5c0-2.762-2.238-5-5-5C24,18,22,20.238,22,23z"
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
      viewBox="0 0 24 24"
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
      viewBox="0 0 24 24"
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
      viewBox="0 0 24 24"
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
      viewBox="0 0 24 24"
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