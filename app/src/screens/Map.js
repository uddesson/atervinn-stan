//@flow
import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import Permissions from 'react-native-permissions';
import MapView, { Marker, Callout } from 'react-native-maps';
import { initialRegion } from '../utils';
import {
  utilityStyles,
  FilterToggler,
  MarkerImage,
  colors,
  GpsIconButton,
} from '../components/UI';
import { MapModal } from '../components/UI/MapModal';

type State = {
  region: Object,
  ftiPositions: Object[],
  modulePositions: Object[],
  isFtiContainerVisible: boolean,
  isModuleVisible: boolean,
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
    region: initialRegion,
    ftiPositions: [],
    modulePositions: [],
    isFtiContainerVisible: true,
    isModuleVisible: true,
  };

  map: ?React$Element<any>;

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
    Promise.all([this.getFtiPositions(), this.getModulePositions()])
      .then(stations =>
        this.setState({
          ftiPositions: stations[0],
          modulePositions: stations[1],
        })
      )
      .catch(() => {
        Alert.alert('Något gick fel', 'Kan inte hämta positioner just nu.');
      });
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

  renderModuleMarkers = (modulePositions: any) => {
    return modulePositions.map((marker: any) => (
      <Marker
        key={marker.locationName}
        coordinate={{
          latitude: marker.lat,
          longitude: marker.lng,
        }}
        title={marker.title}
      >
        <MarkerImage type={'pin-module'} />
        <Callout>
          <MapModal marker={marker} />
        </Callout>
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
      >
        <MarkerImage type={'pin-fti-container'} />
        <Callout>
          <MapModal marker={marker} />
        </Callout>
      </Marker>
    ));
  };

  handleMapRegionChange = (region: Object) => {
    this.setState({ region });
  };

  alertForLocationPermission = async () => {
    const permissionStatus = await Permissions.check('location');
    Alert.alert(
      'Appen har inte åtkomst till din plats',
      'För att kunna guida dig på bästa sätt behöver appen känna till vart du befinner dig. Vill du ge åtkomst?',
      [
        {
          text: 'Nej, jag hittar själv',
          onPress: () => {},
          style: 'cancel',
        },

        permissionStatus === 'undetermined'
          ? {
              text: 'Ja, det går bra',
              onPress: await Permissions.request('location'),
            } // Send a permission request.
          : {
              text: 'Ja, ändra inställningar',
              onPress: Permissions.openSettings,
            },
      ]
    );
  };

  showCurrentLocation = () => {
    const onLocationRecived = position => {
      const region = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.003,
        longitudeDelta: 0.003,
      };
      this.map.animateToRegion(region);
    };

    const onLocationDenied = error => {
      this.alertForLocationPermission();
    };

    navigator.geolocation.getCurrentPosition(
      onLocationRecived,
      onLocationDenied,
      {
        timeout: 200,
        enableHighAccuracy: true,
        maximumAge: 0,
      }
    );
  };

  render() {
    const {
      region,
      modulePositions,
      ftiPositions,
      isFtiContainerVisible,
      isModuleVisible,
    } = this.state;

    return (
      <>
        <MapView
          ref={map => (this.map = map)}
          style={utilityStyles.flex1}
          initialRegion={region}
          showsUserLocation
          userLocationAnnotationTitle={'Min plats'}
          onMapReady={this.showCurrentLocation}
          onRegionChangeComplete={this.handleMapRegionChange}
          loadingEnabled
          loadingIndicatorColor={colors.blue}
          loadingBackgroundColor={colors.whiteSmoke}
        >
          {isModuleVisible && this.renderModuleMarkers(modulePositions)}
          {isFtiContainerVisible && this.renderFtiMarkers(ftiPositions)}
        </MapView>
        <FilterToggler
          style={utilityStyles.absolute}
          isFtiContainerVisible={isFtiContainerVisible}
          isModuleVisible={isModuleVisible}
          onFtiContainerPress={this.handleFtiContainerToggling}
          onModulePress={this.handleModuleToggling}
        />
        <GpsIconButton onPress={this.showCurrentLocation} />
      </>
    );
  }
}
