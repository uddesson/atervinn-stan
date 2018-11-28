import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Home, SearchModal } from '../screens';

export const SearchNavigator = createStackNavigator(
  {
    Home,
    SearchModal,
  },
  { initialRouteName: 'Home' }
);
