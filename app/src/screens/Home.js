//@flow
import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, ImageBackground, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import {
  utilityStyles,
  ShortcutBanner,
  colors,
  StaticSearchInput,
  HomeMessage,
} from '../components/UI';
import { checkModuleAvailability, checkCurrentSeason } from '../utils';

type Props = {
  navigation: NavigationScreenProps,
};

const seasonImageUri = checkCurrentSeason();
const isModulesAvailable = checkModuleAvailability();
const message = isModulesAvailable
  ? 'Osäker på hur du ska sortera ditt skräp? Vår sökfunktion hjälper dig'
  : 'Observera att återvinningsmodulerna inte står ute nu. FTI Stationerna finns dock tillgängliga året om och sökfunktionen fungerar som vanligt.';

export class Home extends Component<Props> {
  static navigationOptions = { header: null };

  render() {
    const { navigation } = this.props;

    return (
      <SafeAreaView
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
                utilityStyles.itemsCenter,
              ]}
            >
              <StaticSearchInput navigation={navigation} />
              <HomeMessage>{message}</HomeMessage>
            </View>
          </ImageBackground>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 50,
  },
  headerImage: {
    padding: 25,
  },
});
