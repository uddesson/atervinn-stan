//@flow
import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, View, Alert, ActivityIndicator } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import {
  utilityStyles,
  SearchInput,
  SearchResultList,
  colors,
  CloseButton,
  SearchResultMessage,
  Paragraph,
} from '../components/UI';

type Props = {
  navigation: NavigationScreenProps,
};

type State = {
  error: boolean,
  loading: boolean,
  searchInput: string,
  searchResults: Object[],
};

export class Search extends Component<Props, State> {
  static navigationOptions = { header: null };

  state = {
    error: false,
    loading: false,
    searchInput: '',
    searchResults: [],
  };

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
      const res = await fetch(`http://localhost:5000/api/sorting/search/${searchInput}`);
      const searchResults = await res.json();
      this.setState({ searchResults, loading: false });
    } catch (err) {
      this.setState({ loading: false, error: true });
    }
  };

  handleSearchOutPut = () => {
    const { searchInput, searchResults, error, loading } = this.state;

    if (error) return <SearchResultMessage type={'error'} />;
    if (!error && loading) return <ActivityIndicator size={'large'} style={{ marginTop: '45%' }} />;
    if (searchInput.length > 1 && searchResults.length === 0)
      return <SearchResultMessage type={'no-results'} />;
    if (!searchInput)
      return (
        <Paragraph>{`(Tillfällig text utan styling.) Visa exempeldata här ifall servern är igång`}</Paragraph>
      );

    return <SearchResultList results={searchResults} />;
  };

  render() {
    const { navigation } = this.props;
    const { searchInput, searchResults, error, loading } = this.state;

    return (
      <SafeAreaView style={[utilityStyles.flex1, utilityStyles.fullWidth, styles.screen]}>
        <View style={[utilityStyles.justifyCenter, styles.container]}>
          <View
            style={[
              utilityStyles.row,
              utilityStyles.fullWidth,
              utilityStyles.justifyAround,
              styles.innerContainer,
            ]}
          >
            <SearchInput navigation={navigation} onChangeText={this.handleSearchInput} />
            <CloseButton onPress={() => navigation.goBack()} />
          </View>
          {this.handleSearchOutPut()}
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
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  innerContainer: {
    width: '100%',
    justifyContent: 'space-around',
  },
});
