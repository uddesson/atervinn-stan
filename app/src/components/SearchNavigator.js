import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Home, SearchModal } from '../screens';

export const SearchNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
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
