import React, { Component } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Image,
  ImageBackground,
  View,
} from 'react-native';
import {
  Paragraph,
  Heading,
  utilityStyles,
  SearchInput,
  SearchResultList,
  ShortcutBanner,
} from '../components/UI';

export class Home extends Component {
  static navigationOptions = { header: null };
  render() {
    const { navigation } = this.props;

    return (
      <SafeAreaView style={[styles.screen, utilityStyles.center]}>
        <View style={[utilityStyles.flex1, utilityStyles.fullWidth]}>
          <ShortcutBanner />

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
