//@flow
import React, { Component } from 'react';
import {
  TextInput,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { utilityStyles } from './utilityStyles';
import { colors } from './colors';
import { CancelIcon } from './Icons';

type Props = {
  navigation: NavigationScreenProps,
};

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
    const { navigation } = this.props;

    return (
      <View
        style={[
          utilityStyles.row,
          styles.container,
          utilityStyles.justifyBetween,
        ]}
      >
        <TextInput
          onChangeText={text => this.handleInput(text)}
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
  },
});
