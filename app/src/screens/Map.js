//@flow

import React, { Component } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import {
  utilityStyles,
  CurrentLocation,
  FilterToggler,
} from '../components/UI';

type Props = {
  handleFilterToggling: () => boolean,
};

type State = {
  isFtiContainerVisible: boolean,
  isModuleVisible: boolean,
};

export class Map extends Component<Props, State> {
  state = {
    isFtiContainerVisible: true,
    isModuleVisible: true,
  };

  handleFtiContainerToggling = () => {
    this.setState({
      isFtiContainerVisible: !this.state.isFtiContainerVisible,
    });
  };

  handleModuleToggling = () => {
    this.setState({
      isModuleVisible: !this.state.isModuleVisible,
    });
  };

  render() {
    const { isFtiContainerVisible, isModuleVisible } = this.state;

    return (
      <SafeAreaView style={[styles.screen, utilityStyles.center]}>
        <CurrentLocation />
        <FilterToggler
          isFtiContainerVisible={isFtiContainerVisible}
          isModuleVisible={isModuleVisible}
          onFtiContainerPress={this.handleFtiContainerToggling}
          onModulePress={this.handleModuleToggling}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
