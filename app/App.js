/**
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { SafeAreaView } from 'react-native';
import { AppNavigator } from './src/components/AppNavigator';
import { utilityStyles } from './src/components/UI';

/**
 * NOTES:
 * GLOBAL.XMLHttpRequest lets us view network requests from the app in Chrome Dev Tools.
 * The FlowFix has been added as the third instance of GLOBAL caused an error
 * that we haven't found a good solution for yet.
 */

// $FlowFixMe
GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest; // Enable XMLHttpRequest to show in debugger.

const RootNavigator = createAppContainer(AppNavigator);

export default class App extends Component<{}> {
  render() {
    return (
      <SafeAreaView style={utilityStyles.flex1}>
        <RootNavigator />
      </SafeAreaView>
    );
  }
}
