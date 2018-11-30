/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { AppNavigator } from './src/components/AppNavigator';

const RootNavigator = createAppContainer(AppNavigator);

export default class App extends Component<{}> {
  render() {
    return <RootNavigator />;
  }
}
