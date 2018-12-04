import React, { Component } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { getRegion } from '../utils';
import {
  utilityStyles,
  CurrentLocation,
  FilterToggler,
  MarkerImage,
  colors,
} from '../components/UI';
import { modulePositions } from '../data/positions';
import { ftiPositions } from '../data/fti-positions';

/**
 * NOTE:
 * fakeCurrentPosition is postition for Stockholm city center.
 * Use until geolocation is implemented. After that, use these values as fallback,
 * if user has not given geolocation-permission. Don't delete it,
 * instead maybe turn it into a util object like defaultRegion or etc.
 */

const fakeCurrentPosition = { latitude: 59.334591, longitude: 18.06324 };

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

    /*
     * Get region values based on position and distance in meters.
     * (Note on distance: Higher numbers = "Zoomed out" effect. Lower = Zoomed in)
     */
    const region = getRegion(
      fakeCurrentPosition.latitude,
      fakeCurrentPosition.longitude,
      2000
    );

    return (
      <SafeAreaView>
        <MapView
          style={styles.map}
          initialRegion={region}
          loadingEnabled={true}
          loadingIndicatorColor={colors.blue}
          loadingBackgroundColor={colors.whiteSmoke}
        >
          <Marker coordinate={fakeCurrentPosition}>
            <CurrentLocation />
          </Marker>
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
