// @flow
import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Home, Map, Info } from '../screens';
import {
  colors, SearchIcon, MapIcon, InfoIcon,
} from './UI';
import { SearchNavigator } from './SearchNavigator';

export const AppNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: SearchNavigator,
      navigationOptions: {
        tabBarLabel: 'SÖK',
        tabBarIcon: ({ activeTintColor, focused }) => (
          <SearchIcon width={25} height={25} fill={focused ? colors.blue : colors.darkGrey} />
        ),
      },
    },
    Map: {
      screen: Map,
      navigationOptions: {
        tabBarLabel: 'KARTA',
        tabBarIcon: ({ focused }) => (
          <MapIcon width={25} height={25} fill={focused ? colors.blue : colors.darkGrey} />
        ),
      },
    },
    Info: {
      screen: Info,
      navigationOptions: {
        tabBarLabel: 'INFO',
        tabBarIcon: ({ focused }) => (
          <InfoIcon width={25} height={25} fill={focused ? colors.blue : colors.darkGrey} />
        ),
      },
    },
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      inactiveTintColor: colors.darkGrey,
      activeTintColor: colors.blue,
      labelStyle: {
        fontSize: 13,
        fontWeight: '600',
        fontFamily: 'Roboto',
      },
      style: {
        padding: 8,
        height: 68,
        backgroundColor: colors.white,
      },
    },
  },
);
