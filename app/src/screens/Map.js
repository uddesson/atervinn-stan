import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';
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
  clickedMarker: {},
};

type Props = {
  navigation: Object,
};

export class Map extends Component<Props, State> {
  state = {
    isFtiContainerVisible: true,
    isModuleVisible: true,
    isModalVisible: false,
    clickedMarker: {},
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

  handleMarkerInfo = marker => {
    this.setState({
      clickedMarker: marker,
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
    return ftiPositions.map((marker: any) => (
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
            visible={this.isModalVisible}
            onPress={this.handleModal}
            marker={this.state.clickedMarker}
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
