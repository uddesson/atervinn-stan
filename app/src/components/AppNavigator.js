//@flow
import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Home, Map, Info } from '../screens';
import { colors, SearchIcon, MapIcon, InfoIcon } from './UI';
import { SearchNavigator } from './SearchNavigator';

export const AppNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: SearchNavigator,
      navigationOptions: {
        tabBarLabel: 'HEM',
        tabBarIcon: ({ activeTintColor, focused }) => (
          <SearchIcon
            width={23}
            height={23}
            fill={focused ? colors.blue : 'grey'}
          />
        ),
      },
    },
    Map: {
      screen: Map,
      navigationOptions: {
        tabBarLabel: 'KARTA',
        tabBarIcon: ({ focused }) => (
          <MapIcon
            width={23}
            height={23}
            fill={focused ? colors.blue : 'grey'}
          />
        ),
      },
    },
    Info: {
      screen: Info,
      navigationOptions: {
        tabBarLabel: 'INFO',
        tabBarIcon: ({ focused }) => (
          <InfoIcon
            width={23}
            height={23}
            fill={focused ? colors.blue : 'grey'}
          />
        ),
      },
    },
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: colors.blue,

      labelStyle: {
        fontSize: 12,
        marginTop: 5,
        fontFamily: 'Jaldi',
      },
      style: {
        padding: 10,
        height: 65,
        backgroundColor: colors.white,
      },
    },
  }
);
