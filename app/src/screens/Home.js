//@flow
import React, { Component } from 'react';
import { StyleSheet, ImageBackground, View } from 'react-native';
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

const isModulesAvailable = checkModuleAvailability();
const message = isModulesAvailable
  ? 'Osäker på hur du ska sortera ditt skräp? Vår sökfunktion hjälper dig.'
  : 'Observera att Stockholms mobila stationer inte står ute vintertid, men FTI:s Stationer är tillgängliga året om.';

export class Home extends Component<Props> {
  static navigationOptions = { header: null };

  render() {
    const { navigation } = this.props;

    return (
      <View style={[styles.container, utilityStyles.flex1]}>
        <ShortcutBanner navigation={navigation} />
        <ImageBackground
          source={{ uri: seasonImageUri }}
          style={[utilityStyles.fullWidth, utilityStyles.fullHeight, styles.headerImage]}
        >
          <View style={[utilityStyles.col, utilityStyles.justifyAround, utilityStyles.flex1]}>
            <View style={styles.staticSearchInputWrapper}>
              <StaticSearchInput navigation={navigation} />
            </View>
            <BlackBoxMessage>{message}</BlackBoxMessage>
          </View>
        </ImageBackground>
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
