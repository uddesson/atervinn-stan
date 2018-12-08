//@flow
import React, { Component } from 'react';
import { TextInput, View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { utilityStyles } from './utilityStyles';
import { colors } from './colors';
import { CancelIcon } from './Icons';

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
      <View style={[utilityStyles.row, styles.container, utilityStyles.justifyBetween]}>
        <TextInput
          onChangeText={text => this.handleChangeText(text)}
          placeholder={'Jag vill återvinna...'}
          value={value}
          placeholderTextColor={colors.lightGrey}
          style={styles.inputContainer}
        />
        <TouchableOpacity
          style={utilityStyles.alignSelfEnd}
          onPress={() => navigation.goBack()}
        >
          <CancelIcon width={30} height={30} fill={colors.blue} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,
    width: '80%',
    padding: 10,
    fontSize: 20,
  },
});
