//@flow
import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, ImageBackground, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import {
  Heading,
  utilityStyles,
  SearchInput,
  SearchResultList,
  colors,
} from '../components/UI';

type Props = {
  navigation: NavigationScreenProps,
};

export class Search extends Component<Props> {
  render() {
    const { navigation } = this.props;

    return (
      <SafeAreaView style={[styles.screen]}>
        <View style={[utilityStyles.justifyCenter, styles.container]}>
          <View style={utilityStyles.center}>
            <SearchInput />
          </View>
          <SearchResultList navigation={navigation} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.whiteSmoke,
  },
  container: {
    padding: 20,
  },
});
