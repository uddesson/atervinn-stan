const stockholmCityCenter = { latitude: 59.334591, longitude: 18.06324 };

// Reference: https://github.com/react-community/react-native-maps/issues/505#issuecomment-301308736
const getRegion = (lat, lon, distance) => {
  distance /= 2;
  const circumference = 40075;
  const oneDegreeOfLatitudeInMeters = 111.32 * 1000;
  const angularDistance = distance / circumference;

  const latitudeDelta = distance / oneDegreeOfLatitudeInMeters;
  const longitudeDelta = Math.abs(
    Math.atan2(
      Math.sin(angularDistance) * Math.cos(lat),
      Math.cos(angularDistance) - Math.sin(lat) * Math.sin(lat),
    ),
  );

  return (result = {
    latitude: lat,
    longitude: lon,
    latitudeDelta,
    longitudeDelta,
  });
};

/*
 * Get region values based on position and distance in meters.
 * (Note on distance: Higher numbers = "Zoomed out" effect. Lower = Zoomed in)
 */
export const initialRegion = getRegion(
  stockholmCityCenter.latitude,
  stockholmCityCenter.longitude,
  2000,
);
