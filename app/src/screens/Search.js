//@flow
import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import {
  utilityStyles,
  SearchInput,
  SearchResultList,
  colors,
  CloseButton,
  Message,
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
      const res = await fetch(
        `http://localhost:5000/api/sorting/search/${searchInput}`
      );
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
      <SafeAreaView style={[utilityStyles.flex1, utilityStyles.fullWidth]}>
        <View style={[utilityStyles.justifyCenter, styles.container]}>
          <View
            style={[
              utilityStyles.row,
              utilityStyles.fullWidth,
              utilityStyles.justifyAround,
              styles.innerContainer,
            ]}
          >
            <SearchInput
              navigation={navigation}
              onChangeText={this.handleSearchInput}
            />
            <CloseButton onPress={() => navigation.goBack()} />
          </View>
          {searchInput.length === 0 ? (
            <Message type={'examples'} />
          ) : searchResults.length === 0 ? (
            <Message type={'no results'} />
          ) : (
            <SearchResultList results={searchResults} navigation={navigation} />
          )}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.whiteSmoke,
  },
  container: {
    padding: 20,
  },
  innerContainer: {
    marginBottom: 25,
  },
});
