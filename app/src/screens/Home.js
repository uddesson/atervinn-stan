//@flow
import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, ImageBackground, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import {
  utilityStyles,
  ShortcutBanner,
  colors,
  StaticSearchInput,
  BlackBoxMessage,
} from '../components/UI';
import { checkModuleAvailability, checkCurrentSeason } from '../utils';

type Props = {
  navigation: NavigationScreenProps,
};

const seasonImageUri = checkCurrentSeason();

/*
 * Credits for example images.
 * Photo by Jon Flobrant on Unsplash (winter)
 * Photo by Arno Smit on Unsplash (spring)
 * Photo by yapo zhou on Unsplash (fall)
 * Photo by Oscar Helgstrand on Unsplash
 */

const isModulesAvailable = checkModuleAvailability();
const message = isModulesAvailable
  ? 'Osäker på hur du ska sortera ditt skräp? Vår sökfunktion hjälper dig'
  : 'Observera att återvinningsmodulerna inte står ute nu. FTI Stationerna finns dock tillgängliga året om och sökfunktionen fungerar som vanligt.';

export class Home extends Component<Props> {
  static navigationOptions = { header: null };

  render() {
    const { navigation } = this.props;

    return (
      <View
        style={[
          utilityStyles.flex1,
          utilityStyles.fullWidth,
          utilityStyles.center,
        ]}
      >
        <View
          style={[
            styles.container,
            utilityStyles.flex1,
            utilityStyles.fullWidth,
          ]}
        >
          <ShortcutBanner navigation={navigation} />
          <ImageBackground
            source={{ uri: seasonImageUri }}
            style={[
              utilityStyles.fullWidth,
              utilityStyles.fullHeight,
              styles.headerImage,
            ]}
          >
            <View
              style={[
                utilityStyles.col,
                utilityStyles.justifyAround,
                utilityStyles.flex1,
              ]}
            >
              <View style={styles.staticSearchInputWrapper}>
                <StaticSearchInput navigation={navigation} />
              </View>
              <BlackBoxMessage>{message}</BlackBoxMessage>
            </View>
          </ImageBackground>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 50,
  },
  staticSearchInputWrapper: {
    width: '100%',
  },
  headerImage: {
    paddingHorizontal: '8%',
  },
});
