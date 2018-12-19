//@flow
import React, { Component } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import {
  utilityStyles,
  SearchInput,
  SearchResultList,
  colors,
  CloseButton,
  SearchResultMessage,
} from '../components/UI';

type Props = {
  navigation: NavigationScreenProps,
};

type State = {
  error: boolean,
  loading: boolean,
  searchInput: string,
  searchResults: Object[],
  exampleResults: Object[],
};

export class Search extends Component<Props, State> {
  static navigationOptions = { header: null };

  state = {
    error: false,
    loading: false,
    searchInput: '',
    searchResults: [],
    exampleResults: [],
  };

  componentDidMount() {
    this.getExampleResults();
  }

  handleSearchInput = (searchInput: string) => {
    // Always set the searchInput to state, even if it's empty. Controls the output and message to user.
    this.setState({ searchInput });

    // But if the searchInput is empty, don't try to fetch data. Will only result in 404 and catch error, unnecessary.
    if (searchInput.trim() === '') return;
    this.getSearchResuts(searchInput);
  };

  getSearchResuts = async (searchInput: string) => {
    this.setState({ loading: true });
    try {
      const res = await fetch(
        `http://localhost:5000/api/sorting/search/${searchInput}`
      );
      const searchResults = await res.json();
      this.setState({ searchResults, loading: false });
    } catch (err) {
      this.setState({ loading: false, error: true });
    }
  };

  getExampleResults = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/exampleSorting');
      const exampleResults = await res.json();

      this.setState({ exampleResults });
    } catch (err) {
      this.setState({ error: true });
    }
  };

  handleSearchOutPut = () => {
    const { navigation } = this.props;
    const {
      searchInput,
      searchResults,
      exampleResults,
      error,
      loading,
    } = this.state;

    if (error) return <SearchResultMessage type={'error'} />;
    if (!error && loading)
      return <ActivityIndicator size={'large'} style={{ marginTop: '45%' }} />;
    if (searchInput.length > 1 && searchResults.length === 0)
      return <SearchResultMessage type={'no-results'} />;
    if (!searchInput)
      return (
        <SearchResultList results={exampleResults} navigation={navigation} />
      );

    return <SearchResultList results={searchResults} navigation={navigation} />;
  };

  render() {
    const { navigation } = this.props;
    const { searchInput, searchResults, error, loading } = this.state;

    return (
      <View style={[utilityStyles.fullHeight, styles.screen]}>
        <View style={[utilityStyles.justifyCenter]}>
          <View
            style={[
              utilityStyles.row,
              utilityStyles.justifyBetween,
              styles.container,
            ]}
          >
            <SearchInput
              navigation={navigation}
              onChangeText={this.handleSearchInput}
            />
            <CloseButton onPress={() => navigation.goBack()} />
          </View>
          {this.handleSearchOutPut()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.whiteSmoke,
    paddingHorizontal: '8%',
  },
  container: {
    paddingHorizontal: 8,
    marginTop: 20,
  },
});
