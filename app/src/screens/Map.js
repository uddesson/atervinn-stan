//@flow

import React, { Component } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { utilityStyles, CurrentLocation } from '../components/UI';

type Props = {};

export class Map extends Component<Props> {
  render() {
    return (
      <SafeAreaView style={[styles.screen, utilityStyles.center]}>
        <CurrentLocation />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
