# WIP: Återvinn Stan

## About
Mobile app encouraging and helping people to recycle their garbage, guiding them to nearby recycling stations in the city. See prototype [here](https://github.com/uddesson/atervinn-stan-prototype).

The app is currently IOS only and available for phone and iPad.

## Requirements

#### App
* node
* react-native-cli
* flow v 0.78.0

_NOTE: react native comes with support for flow but it requires an older version._

#### Server
* express
* cors


## Libraries
### `React-native-maps`
In the prototype we used react-maps which took use of google maps. Since then googles pricing has been changed. A lot of other map libraries also requires an API key from google. In react-native-maps its possible to use apple maps ie its free of charge.

[Link to library]()

### `Moment`
Well established library to handle time and date. Used in combination with twix.

[Link to library]()

### `Twix`
Plugin to moment where you can create date ranges and compare date to see if its included in range.

[Link to library]()

### `react-native-permissions`


[Link to library]()

### `react-native-svg`
React native does not currently support inline-svg a library is therefore needed.

[Link to library]()

### `react-navigation`
Well established library for navigation, allows you to send data between screens.

[Link to library]()


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

__Repeat in atervinn-stan/app.__

## Usage
To run server stand in root and run

#### With yarn 

```
yarn start
```

#### With npm

```
npm start
```

To start the app

Open project in Xcode, or in other simulator, and build project to start the app.