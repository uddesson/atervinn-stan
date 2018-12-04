//@flow
import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, ImageBackground, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import {
  Heading,
  utilityStyles,
  SearchInput,
  SearchResultList,
  ShortcutBanner,
} from '../components/UI';

type Props = {
  navigation: NavigationScreenProps,
};

export class Home extends Component<Props> {
  static navigationOptions = { header: null };
  render() {
    const { navigation } = this.props;

    return (
      <SafeAreaView style={[styles.screen, utilityStyles.center]}>
        <View style={[utilityStyles.flex1, utilityStyles.fullWidth]}>
          <ShortcutBanner navigation={navigation} />

          <ImageBackground
            source={{ uri: 'header-city' }}
            style={[styles.headerImage, utilityStyles.center]}
          >
            <Heading style={utilityStyles.whiteText}>
              Vad vill du återvinna?
            </Heading>
            <SearchInput />
          </ImageBackground>

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
  },
  headerImage: {
    width: '100%',
    height: 150,
  },
});
