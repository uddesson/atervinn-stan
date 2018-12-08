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

type State = {
  searchInput: string,
  searchResults: Object[],
};

export class Search extends Component<Props, State> {
  static navigationOptions = { header: null };

  state = {
    searchInput: '',
    searchResults: [],
  };

  handleSearchInput = (searchInput: string) => {
    this.setState({ searchInput });
    this.getSearchResuts(searchInput);
  };

  getSearchResuts = async (searchInput: string) => {
    try {
      const res = await fetch(`http://localhost:5000/api/sorting/search/${searchInput}`);
      const searchResults = await res.json();
      // Store searchresults in state
      this.setState({ searchResults });
    } catch (error) {
      // TODO: Handle errors
      console.log(error);
    }
  };

  render() {
    const { navigation } = this.props;
    const { searchInput, searchResults } = this.state;

    return (
      <SafeAreaView style={[styles.screen]}>
        <View style={[utilityStyles.justifyCenter, styles.container]}>
          <View style={[utilityStyles.center, styles.innerContainer]}>
            <SearchInput navigation={navigation} onChangeText={this.handleSearchInput} />
          </View>
          <SearchResultList results={searchResults} navigation={navigation} />
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
  innerContainer: {
    marginBottom: 25,
  },
});
