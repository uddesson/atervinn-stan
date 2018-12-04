import React, { Component } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { initialRegion } from '../utils';
import { utilityStyles, FilterToggler, MarkerImage, colors, GpsIconButton } from '../components/UI';
import { modulePositions } from '../data/positions';
import { ftiPositions } from '../data/fti-positions';

type State = {
  isFtiContainerVisible: boolean,
  isModuleVisible: boolean,
};

export class Map extends Component<State> {
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

  renderModuleMarkers = () => {
    return modulePositions.map((marker: any) => (
      <Marker
        key={marker.address}
        coordinate={{
          latitude: marker.lat,
          longitude: marker.lng,
        }}
        title={marker.title}
      >
        <MarkerImage type={'pin-module'} />
      </Marker>
    ));
  };

  renderFtiMarkers = () => {
    return ftiPositions.map((marker: any) => (
      <Marker
        key={marker.stationName}
        coordinate={{
          latitude: marker.lat,
          longitude: marker.lng,
        }}
        title={marker.address}
      >
        <MarkerImage type={'pin-fti-container'} />
      </Marker>
    ));
  };

  render() {
    const { isFtiContainerVisible, isModuleVisible } = this.state;
    return (
      <SafeAreaView>
        <MapView
          style={styles.map}
          initialRegion={initialRegion}
          loadingEnabled={true}
          showsUserLocation={true}
          followsUserLocation={true}
          loadingIndicatorColor={colors.blue}
          loadingBackgroundColor={colors.whiteSmoke}
        >
          {isModuleVisible ? this.renderModuleMarkers() : null}
          {isFtiContainerVisible ? this.renderFtiMarkers() : null}
        </MapView>
        <FilterToggler
          style={utilityStyles.absolute}
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
  map: {
    width: '100%',
    height: '100%',
  },
});
