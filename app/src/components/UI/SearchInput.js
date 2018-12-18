//@flow
import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { colors } from './colors';
import { utilityStyles } from './utilityStyles';

type Props = {
  navigation: NavigationScreenProps,
  onChangeText: Function,
};

type State = {
  value: string | null,
};

export class SearchInput extends Component<Props, State> {
  state = {
    value: null,
  };

  handleChangeText = (value: string) => {
    const { onChangeText } = this.props;
    this.setState({ value });

    // Call onChangeText from parent to send up search input.
    if (onChangeText) {
      onChangeText(value);
    }
  };

  render() {
    const { value } = this.state;
    const { navigation } = this.props;

    return (
      <TextInput
        autoFocus={true}
        onChangeText={text => this.handleChangeText(text)}
        placeholder={'Jag vill återvinna...'}
        value={value}
        placeholderTextColor={colors.lightGrey}
        style={[styles.inputContainer]}
      />
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,
    width: '70%',
    paddingVertical: 10,
    //marginLeft: 10,
    fontSize: 20,
  },
});
