import React, { Component } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import {
  Paragraph,
  utilityStyles,
  SearchInput,
  SearchResultList,
} from '../components/UI';

export class Home extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <SafeAreaView style={[styles.screen, utilityStyles.center]}>
        <Paragraph>I'm the home screen</Paragraph>
        <SearchInput />
        <SearchResultList navigation={navigation} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: '90%',
  },
});
