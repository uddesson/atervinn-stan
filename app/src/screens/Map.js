//@flow
import React, { Component } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import MapView, { Marker } from 'react-native-maps';
import { initialRegion } from '../utils';
import {
  utilityStyles,
  FilterToggler,
  MarkerImage,
  colors,
  GpsIconButton,
} from '../components/UI';
import { modulePositions } from '../data/positions';
import { ftiPositions } from '../data/fti-positions';
import { MapModal } from '../components/UI/MapModal';

type State = {
  isFtiContainerVisible: boolean,
  isModuleVisible: boolean,
  isModalVisible: boolean,
  clickedMarker: {
    locationName: string,
    sorting: [],
    locationConfirmed?: boolean,
    sortingConfirmed?: boolean,
  },
};

type Props = {
  navigation: NavigationScreenProps,
};

export class Map extends Component<Props, State> {
  state = {
    isFtiContainerVisible: true,
    isModuleVisible: true,
    isModalVisible: false,
    clickedMarker: {
      locationName: '',
      sorting: [],
    },
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

  renderModuleMarkers = () => {
    return modulePositions.map((marker: Object) => (
      <Marker
        key={marker.address}
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

  renderFtiMarkers = () => {
    return ftiPositions.map((marker: Object) => (
      <Marker
        key={marker.stationName}
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
        {isModalVisible ? (
          <MapModal
            visible={isModalVisible}
            onPress={this.handleModal}
            marker={clickedMarker}
          />
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
