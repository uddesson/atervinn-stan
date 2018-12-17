//@flow
import React from 'react';
import Svg, { G, Path, Polygon, Circle, Line, Polyline } from 'react-native-svg';

type Props = {
  width: number,
  height: number,
  fill: string,
};

export const SearchIcon = (props: Props) => {
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

export const MapIcon = (props: Props) => {
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

export const InfoIcon = (props: Props) => {
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

export const GpsIcon = (props: Props) => {
  const { width, height, fill } = props;

  return (
    <Svg viewBox="0 0 40 40" width={width} height={height}>
      <Path
        fill={fill}
        d="M20 26.5c-3.6 0-6.5-2.9-6.5-6.5s2.9-6.5 6.5-6.5 6.5 2.9 6.5 6.5-2.9 6.5-6.5 6.5zm0-12c-3 0-5.5 2.5-5.5 5.5s2.5 5.5 5.5 5.5 5.5-2.5 5.5-5.5-2.5-5.5-5.5-5.5z"
      />
      <Path
        fill={fill}
        d="M20 16.5c-.3 0-.5-.2-.5-.5v-4c0-.3.2-.5.5-.5s.5.2.5.5v4c0 .3-.2.5-.5.5zM20 28.5c-.3 0-.5-.2-.5-.5v-4c0-.3.2-.5.5-.5s.5.2.5.5v4c0 .3-.2.5-.5.5z"
      />
      <G>
        <Path
          fill={fill}
          d="M28 20.5h-4c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h4c.3 0 .5.2.5.5s-.2.5-.5.5zM16 20.5h-4c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h4c.3 0 .5.2.5.5s-.2.5-.5.5z"
        />
      </G>
    </Svg>
  );
};

export const ExternalLinkIcon = (props: Props) => {
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
      <Path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <Polyline points="15 3 21 3 21 9" />
      <Line x1="10" y1="14" x2="21" y2="3" />
    </Svg>
  );
};

export const WarningIcon = (props: Props) => {
  const { width, height, fill } = props;

  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path d="M0 0h24v24H0V0z" />
      <Circle fill={fill} cx="12" cy="19" r="2" />
      <Path fill={fill} d="M12 3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2s2-.9 2-2V5c0-1.1-.9-2-2-2z" />
    </Svg>
  );
};

export const CancelIcon = (props: Props) => {
  const { width, height, fill } = props;

  return (
    <Svg height={height} width={width} viewBox="0 0 212.982 212.982" {...props}>
      <Path
        d="M131.804 106.491l75.936-75.936c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0L106.491 81.18 30.554 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.989 6.99-6.989 18.323 0 25.312l75.937 75.936-75.937 75.937c-6.989 6.99-6.989 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0l75.937-75.937 75.937 75.937c6.989 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.322 0-25.312l-75.936-75.936z"
        fillRule="evenodd"
        clipRule="evenodd"
        stroke={fill}
        fill={fill}
      />
    </Svg>
  );
};
