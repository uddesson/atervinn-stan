# Återvinn Stan

## About

Mobile app encouraging and helping people to recycle their garbage, guiding them to nearby recycling stations in the city. See prototype [here](https://github.com/uddesson/atervinn-stan-prototype).

The app is currently iOS only and developed for iPhone and iPad. (Not distrubuted anywhere for now.)

## Requirements

#### App

- `node`
- `react-native-cli`
- `flow -v 0.78.0`

_NOTE: React Native comes with support for flow but project requires an older version._

#### Server

- `express`
- `cors`

## Libraries

### `react-native-maps`

In the prototype we used [google-map-react](https://github.com/google-map-react/google-map-react) with Google Maps as provider. Since then pricing for using the API has changed, and a lot of other map libraries also requires an API key from Google. This time we used `react-native-maps` wich allows us to use Apple Maps free of charge. It works just as good and fits the purposes of our app. One con was that we first wanted to style the map, which was easy with Google Maps. But later we decided that it's a better user experience to navigate a map that looks like the native map on your phone. So it turned out to be no problem.

[– Link to react-native-maps.](https://github.com/react-native-community/react-native-maps)

### `Moment`

Well established library to handle time and date. Used in combination with twix.

[– Link to moment.](https://www.npmjs.com/package/moment)

### `Twix`

Plugin to moment where you can create date ranges and compare date to see if its included in range.

[– Link to twix.](https://www.npmjs.com/package/twix)

### `react-native-permissions`

Makes it easy to request permissions from the user, and if we were to extend the app to Android the library will spare us a lot of platform specific code for permissions.

[– Link to react-native-permissions.](https://github.com/yonahforst/react-native-permissions)

### `react-native-svg`

We use `react-native-svg` for our icons. React Native does not currently support use of inline-svg and `react-native-svg` solves this problem.

[– Link to react-native-svg.](https://github.com/react-native-community/react-native-svg)

### `react-navigation`

Used for routing and navigaiton in the app. Helps us build a good structure and also allows us to send data between screens.

[– Link to react-navigation.](https://www.npmjs.com/package/react-navigation)

## Install

```
git clone https://github.com/uddesson/atervinn-stan.git
cd atervinn-stan
```

With yarn

```
yarn
```

With npm

```
npm install
```

**Repeat in atervinn-stan/app.**

## Usage

To run server stand in root and run:

#### With yarn

```
yarn start
```

#### With npm

```
npm start
```

To start the app:

Open project in Xcode, or in other simulator, and build project to start the app.
