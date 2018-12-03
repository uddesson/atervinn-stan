import React, { Component } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import MapView from 'react-native-maps';
import { getRegion } from '../utils';
import { utilityStyles, CurrentLocation, FilterToggler } from '../components/UI';

/**
 * NOTE:
 * fakeCurrentPosition is postition for Stockholm city center.
 * Use until geolocation is implemented. After that, use these values as fallback,
 * if user has not given geolocation-permission. Don't delete it,
 * instead maybe turn it into a util object like defaultRegion or etc.
 */

const fakeCurrentPosition = { latitude: 59.334591, longitude: 18.06324 };

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

    /*
     * Get region values based on position and distance in meters.
     * (Note on distance: Higher numbers = "Zoomed out" effect. Lower = Zoomed in)
     */
    const region = getRegion(fakeCurrentPosition.latitude, fakeCurrentPosition.longitude, 2000);

    return (
      <SafeAreaView>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: region.latitude,
            longitude: region.longitude,
            latitudeDelta: region.latitudeDelta,
            longitudeDelta: region.longitudeDelta,
          }}
          mapType={'standard'}
        />
        <CurrentLocation
          style={{ position: 'absolute', bottom: '50%', left: '50%' }}
        />
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
