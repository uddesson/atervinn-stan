// @flow
import React, { Component } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';
import { utilityStyles } from './utilityStyles';

/**
 * Credit for pulse and animation goes to https://github.com/mastermoo/react-native-pulse-loader.
 * Component has been modified to fit the purposes of this app.
 */

type Props = {
  size: number,
  pulseMaxSize: number,
  borderColor: string,
  backgroundColor: string,
  getStyle: ?Function,
  interval: number,
};

export class PulseAnimation extends Component<Props> {
  anim = new Animated.Value(0);

  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    const { interval } = this.props;
    Animated.timing(this.anim, {
      toValue: 1,
      duration: interval,
      //easing: Easing.in,
    }).start();
  }

  render() {
    const {
      size,
      pulseMaxSize,
      borderColor,
      backgroundColor,
      getStyle,
    } = this.props;

    return (
      <View
        style={[
          utilityStyles.center,
          utilityStyles.absolute,
          {
            width: pulseMaxSize,
            height: pulseMaxSize,
            marginLeft: -pulseMaxSize / 2,
            marginTop: -pulseMaxSize / 2,
          },
        ]}
      >
        <Animated.View
          style={[
            styles.circle,
            {
              borderColor,
              backgroundColor,
              width: this.anim.interpolate({
                inputRange: [0, 1],
                outputRange: [size, pulseMaxSize],
              }),
              height: this.anim.interpolate({
                inputRange: [0, 1],
                outputRange: [size, pulseMaxSize],
              }),
              borderRadius: pulseMaxSize / 2,
              opacity: this.anim.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 0],
              }),
            },
            getStyle && getStyle(this.anim),
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circle: {
    borderWidth: 4 * StyleSheet.hairlineWidth,
  },
});
