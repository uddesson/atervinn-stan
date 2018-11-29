import React, { Component } from 'react';
import {
  TextInput,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import { utilityStyles } from './utilityStyles';
import { colors } from './colors';

export class SearchInput extends Component {
  state = {
    value: null,
    isModalOpen: false,
  };

  handleInput = value => {
    // const { handleSearchInput } = this.props;
    this.setState({ value });
    // handleSearchInput(value);
  };

  handleModal = visibility => {
    this.setState({ isModalOpen: visibility });
  };

  render() {
    const { value } = this.state;
    return (
      <View style={[utilityStyles.row]}>
        <TextInput
          onChangeText={text => this.handleInput(text)}
          placeholder={'T.ex pizzakartong'}
          value={value}
          placeholderTextColor={colors.darkGrey}
          style={styles.inputContainer}
        />
        <TouchableOpacity activeOpacity={0.7} style={styles.button}>
          <Text style={utilityStyles.whiteText}>Sök</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    borderColor: colors.green,
    width: '80%',
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    padding: 10,
  },
  button: {
    borderWidth: 1,
    borderColor: colors.green,
    backgroundColor: colors.green,
    color: 'white',
    width: '20%',
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    padding: 10,
  },
});
