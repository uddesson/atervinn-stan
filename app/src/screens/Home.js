//@flow
import React, { Component } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import {
  Heading,
  utilityStyles,
  SearchInput,
  SearchResultList,
  ShortcutBanner,
  colors,
  Paragraph,
  SearchIcon,
  StaticSearchInput,
  HomeMessage,
} from '../components/UI';

type Props = {
  navigation: NavigationScreenProps,
};

export class Home extends Component<Props> {
  static navigationOptions = { header: null };

  /**
   * Temporary testing of backend.
   */
  callBackendAPI = async () => {
    try {
      const responseFromDB = await fetch('http://localhost:5000/api/stations');
      const stationsInDB = await responseFromDB.json();
      console.log({ stationsInDB });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.callBackendAPI();
  }

  render() {
    const { navigation } = this.props;

    return (
      <SafeAreaView style={[styles.screen, utilityStyles.center]}>
        <View
          style={[
            styles.container,
            utilityStyles.flex1,
            utilityStyles.fullWidth,
          ]}
        >
          <ShortcutBanner navigation={navigation} />
          <ImageBackground
            source={{ uri: 'header-city' }}
            style={[styles.headerImage]}
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
              <HomeMessage />
            </View>
          </ImageBackground>
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
  container: {
    marginBottom: 50,
  },
  headerImage: {
    width: '100%',
    height: '100%',
    padding: 25,
  },
});
