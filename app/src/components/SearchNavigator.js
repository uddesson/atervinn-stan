// @flow
import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Home, Search, SearchModal } from '../screens';
import { colors } from './UI';

export const SearchNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: () => ({
        headerBackTitle: null,
      }),
    },
    Search: {
      screen: Search,
      mode: 'modal',
      navigationOptions: () => ({
        headerBackTitle: null,
      }),
    },
    SearchModal: {
      screen: SearchModal,
      navigationOptions: () => ({
        headerStyle: { borderBottomWidth: 0, backgroundColor: colors.whiteSmoke },
        headerLeftContainerStyle: { marginLeft: 10, marginTop: 10 },
        headerTintColor: colors.blue,
      }),
    },
  },
  {
    initialRouteName: 'Home',
  },
);
