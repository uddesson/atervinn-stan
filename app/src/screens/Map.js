import React, { Component } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Paragraph, utilityStyles } from '../components/UI';

export class Map extends Component {
  render() {
    return (
      <SafeAreaView style={[styles.screen, utilityStyles.center]}>
        <Paragraph>I'm the map screen</Paragraph>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
