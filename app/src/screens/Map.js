import React, { Component } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import {
  utilityStyles,
  CurrentLocation,
  FilterToggler,
} from '../components/UI';
import MapView from 'react-native-maps';

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

  regionContainingPoints(points) {
    var minX, maxX, minY, maxY;

    // init first point
    (point => {
      minX = point.latitude;
      maxX = point.latitude;
      minY = point.longitude;
      maxY = point.longitude;
    })(points[0]);

    // calculate rect
    points.map(point => {
      minX = Math.min(minX, point.latitude);
      maxX = Math.max(maxX, point.latitude);
      minY = Math.min(minY, point.longitude);
      maxY = Math.max(maxY, point.longitude);
    });

    var midX = (minX + maxX) / 2;
    var midY = (minY + maxY) / 2;
    var midPoint = [midX, midY];

    var deltaX = maxX - minX;
    var deltaY = maxY - minY;

    return {
      latitude: midX,
      longitude: midY,
      latitudeDelta: deltaX,
      longitudeDelta: deltaY,
    };
  }

  regionFrom(lat, lon, distance) {
    distance = distance / 2;
    const circumference = 40075;
    const oneDegreeOfLatitudeInMeters = 111.32 * 1000;
    const angularDistance = distance / circumference;
    const latitudeDelta = distance / oneDegreeOfLatitudeInMeters;
    const longitudeDelta = Math.abs(
      Math.atan2(
        Math.sin(angularDistance) * Math.cos(lat),
        Math.cos(angularDistance) - Math.sin(lat) * Math.sin(lat)
      )
    );
    return (result = {
      latitude: lat,
      longitude: lon,
      latitudeDelta,
      longitudeDelta,
    });
  }

  render() {
    const { isFtiContainerVisible, isModuleVisible } = this.state;

    const region = this.regionContainingPoints([
      { latitude: 59.334591, longitude: 18.06324 },
    ]);

    return (
      <SafeAreaView>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 59.334591,
            longitude: 18.06324,
            latitudeDelta: 0.267,
            longitudeDelta: 0.409,
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
