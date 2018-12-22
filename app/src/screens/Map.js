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
  ftiFilterIsActive: boolean,
  moduleFilterIsActive: boolean,
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
    ftiFilterIsActive: true,
    moduleFilterIsActive: true,
  };

  map: ?React$Element<any>;

  // Called when map is ready.
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

    navigator.geolocation.getCurrentPosition(onLocationRecived, onLocationDenied, {
      timeout: 200,
      enableHighAccuracy: true,
      maximumAge: 0,
    });
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

  handleRegionChangeComplete = (region: Object) => {
    /**
     * When the user changes region (drags map) - fetch positions and filter out those
     * who are within the current region. Only show these.
     *
     * onRegionChangeComplete is also called initially when map first is rendendered,
     * because it will always recive an initial region.
     */

    Promise.all([this.getFtiPositions(), this.getModulePositions()])
      .then(stations =>
        this.setState({
          region,
          ftiPositions: this.getMarkersWithinRegion(region, stations[0]),
          modulePositions: this.getMarkersWithinRegion(region, stations[1]),
        }),
      )
      .catch(() => {
        Alert.alert('Något gick fel', 'Kan inte hämta positioner just nu.');
      });
  };

  getMarkersWithinRegion = (region: Object, positions) => {
    // Calculate bounds + add 30% outside of what the user is seeing (screen).
    const bounds = [
      region.longitude + (region.longitudeDelta / 2) * 1.3,
      region.latitude + (region.latitudeDelta / 2) * 1.3,
      region.longitude - (region.longitudeDelta / 2) * 1.3,
      region.latitude - (region.latitudeDelta / 2) * 1.3,
    ];

    // Filter out positions (markers) that are outside of the bounds, don't render them.
    const visiblePositions = positions.filter(position => {
      if (
        position.lng < bounds[0] &&
        position.lat < bounds[1] &&
        position.lng > bounds[2] &&
        position.lat > bounds[3]
      ) {
        return position;
      }
      return false;
    });

    return visiblePositions;
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
      ],
    );
  };

  handleFtiContainerToggling = () => {
    this.setState({
      ftiFilterIsActive: !this.state.ftiFilterIsActive,
    });
  };

  handleModuleToggling = () => {
    this.setState({
      moduleFilterIsActive: !this.state.moduleFilterIsActive,
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

  render() {
    const {
      region,
      modulePositions,
      ftiPositions,
      ftiFilterIsActive,
      moduleFilterIsActive,
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
          onRegionChangeComplete={this.handleRegionChangeComplete}
          loadingEnabled
          loadingIndicatorColor={colors.blue}
          loadingBackgroundColor={colors.whiteSmoke}
        >
          {moduleFilterIsActive && this.renderModuleMarkers(modulePositions)}
          {ftiFilterIsActive && this.renderFtiMarkers(ftiPositions)}
        </MapView>
        <FilterToggler
          style={utilityStyles.absolute}
          ftiFilterIsActive={ftiFilterIsActive}
          moduleFilterIsActive={moduleFilterIsActive}
          onFtiContainerPress={this.handleFtiContainerToggling}
          onModulePress={this.handleModuleToggling}
        />
        <GpsIconButton onPress={this.showCurrentLocation} />
      </>
    );
  }
}
