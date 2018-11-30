// @flow
import React, { Component } from 'react';
import { View, TouchableOpacity, Animated } from 'react-native';
import { PulseAnimation } from './PulseAnimation';
import { colors } from './colors';

/**
 * Credit for pulse and animation goes to https://github.com/mastermoo/react-native-pulse-loader.
 * Component has been modified to fit the purposes of this app.
 */

type Props = {
  interval: number,
  size: number,
  pulseMaxSize: number,
  icon: React$Element<any>,
  borderColor: string,
  backgroundColor: string,
  getStyle: ?Function,
};

type State = {
  circles: number[],
};

export class Pulse extends Component<Props, State> {
  static defaultProps = {
    interval: 20,
    size: 50,
    pulseMaxSize: 150,
    icon: undefined,
    borderColor: colors.darkBlue,
    backgroundColor: colors.blue,
    getStyle: undefined,
  };

  state = {
    circles: [],
  };

  counter = 1;
  setInterval = null;
  anim = new Animated.Value(1);

  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    this.setCircleInterval();
  }

  setCircleInterval() {
    const { interval } = this.props;
    this.setInterval = setInterval(this.addCircle.bind(this), interval);
    this.addCircle();
  }

  addCircle() {
    const { circles } = this.state;
    this.setState({ circles: [...circles, this.counter] });
    this.counter++;
  }

  render() {
    const { icon } = this.props;

    return (
      <View
        style={{
          backgroundColor: 'transparent',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {this.state.circles.map(circle => (
          <PulseAnimation key={circle} {...this.props} />
        ))}

        <TouchableOpacity
          activeOpacity={1}
          style={{
            transform: [
              {
                scale: this.anim,
              },
            ],
          }}
        >
          {icon}
        </TouchableOpacity>
      </View>
    );
  }
}
