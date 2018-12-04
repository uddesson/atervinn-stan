//@flow
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

type Props = {};

type State = {
  value: string | null,
};

export class SearchInput extends Component<Props, State> {
  state = {
    value: null,
  };

  handleInput = (value: string) => {
    // const { handleSearchInput } = this.props;
    this.setState({ value });
    // handleSearchInput(value);
  };

  render() {
    const { value } = this.state;
    return (
      <View style={[utilityStyles.row, styles.container]}>
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
  container: {
    width: '80%',
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: colors.green,
    width: '80%',
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    padding: 10,
    backgroundColor: colors.white,
    opacity: 0.8,
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
