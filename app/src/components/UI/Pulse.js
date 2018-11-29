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
  icon: Component,
  borderColor: string,
  backgroundColor: string,
  getStyle: Function,
};

export class Pulse extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      circles: [],
    };

    this.counter = 1;
    this.setInterval = null;
    this.anim = new Animated.Value(1);
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

Pulse.defaultProps = {
  interval: 2000,
  size: 50,
  pulseMaxSize: 150,
  icon: undefined,
  borderColor: colors.darkBlue,
  backgroundColor: colors.blue,
  getStyle: undefined,
};
