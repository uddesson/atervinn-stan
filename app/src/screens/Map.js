//@flow
import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import MapView, { Marker } from 'react-native-maps';
import { initialRegion } from '../utils';
import { utilityStyles, FilterToggler, MarkerImage, colors, GpsIconButton } from '../components/UI';
import { MapModal } from '../components/UI/MapModal';

type State = {
  ftiPositions: Object[],
  modulePositions: Object[],
  isFtiContainerVisible: boolean,
  isModuleVisible: boolean,
  isModalVisible: boolean,
  clickedMarker: {
    locationName: string,
    sorting: string[],
    locationConfirmed?: boolean,
    sortingConfirmed?: boolean,
  },
};

type Props = {
  navigation: NavigationScreenProps,
};

/**
 * Note: Annotation for postitions in map-functions should be ..positions: Object[], and ..Object.
 * But this causes error "Missing type annotation for U" with no obvious solution.
 * If there is time, try to find an answer to this. Seems to be a flow issue.
 *
 * Ref: https://github.com/facebook/flow/issues/6151
 */

export class Map extends Component<Props, State> {
  state = {
    ftiPositions: [],
    modulePositions: [],
    isFtiContainerVisible: true,
    isModuleVisible: true,
    isModalVisible: false,
    clickedMarker: {
      locationName: '',
      sorting: [],
    },
  };

  getFtiPositions = async () => {
    const res = await fetch('http://localhost:5000/api/fti');
    const ftiPositions: Array<Object> = await res.json();
    return ftiPositions;
  };

  getModulePositions = async () => {
    const res = await fetch('http://localhost:5000/api/modules');
    const modulePositions: Array<Object> = await res.json();
    return modulePositions;
  };

  componentDidMount() {
    Promise.all([this.getFtiPositions(), this.getModulePositions()]).then(stations =>
      this.setState({
        ftiPositions: stations[0],
        modulePositions: stations[1],
      }),
    );
  }

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

  handleModal = () => {
    this.setState({
      isModalVisible: !this.state.isModalVisible,
    });
  };

  handleMarkerInfo = (marker: Object) => {
    this.setState({
      clickedMarker: marker,
    });
  };

  renderModuleMarkers = (modulePositions: any) => {
    return modulePositions.map((marker: any) => (
      <Marker
        key={marker.locationName}
        coordinate={{
          latitude: marker.lat,
          longitude: marker.lng,
        }}
        title={marker.title}
        onPress={() => {
          // save marker obj in state
          this.handleMarkerInfo(marker);
          // open modal
          this.handleModal();
        }}
      >
        <MarkerImage type={'pin-module'} />
      </Marker>
    ));
  };

  renderFtiMarkers = (ftiPositions: any) => {
    return ftiPositions.map((marker: any) => (
      <Marker
        key={marker.locationName}
        coordinate={{
          latitude: marker.lat,
          longitude: marker.lng,
        }}
        title={marker.address}
        onPress={() => {
          // save marker obj in state
          this.handleMarkerInfo(marker);
          // open modal
          this.handleModal();
        }}
      >
        <MarkerImage type={'pin-fti-container'} />
      </Marker>
    ));
  };

  render() {
    const {
      modulePositions,
      ftiPositions,
      isFtiContainerVisible,
      isModuleVisible,
      isModalVisible,
      clickedMarker,
    } = this.state;
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
          {isModuleVisible ? this.renderModuleMarkers(modulePositions) : null}
          {isFtiContainerVisible ? this.renderFtiMarkers(ftiPositions) : null}
        </MapView>
        <FilterToggler
          style={utilityStyles.absolute}
          isFtiContainerVisible={isFtiContainerVisible}
          isModuleVisible={isModuleVisible}
          onFtiContainerPress={this.handleFtiContainerToggling}
          onModulePress={this.handleModuleToggling}
        />
        {isModalVisible ? (
          <MapModal visible={isModalVisible} onPress={this.handleModal} marker={clickedMarker} />
        ) : null}
        <GpsIconButton />
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
