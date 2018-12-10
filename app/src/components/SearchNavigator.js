//@flow
import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Home, Search, SearchModal } from '../screens';

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
    },
  },
  {
    initialRouteName: 'Home',
  }
);
