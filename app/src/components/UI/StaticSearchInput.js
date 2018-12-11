//@flow
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { colors } from './colors';
import { SearchIcon } from './Icons';
import { Paragraph } from './Types';
import { utilityStyles } from './utilityStyles';

type Props = {
  navigation: NavigationScreenProps,
};

export const StaticSearchInput = (props: Props) => {
  const { navigation } = props;
  return (
    <>
      <TouchableOpacity
        style={[
          styles.searchInput,
          utilityStyles.row,
          utilityStyles.justifyBetween,
          utilityStyles.fullWidth,
          utilityStyles.boxShadow,
        ]}
        onPress={() => navigation.navigate('Search')}
        activeOpacity={1}
      >
        <Paragraph style={styles.searchText}>Vad vill du återvinna?</Paragraph>
        <SearchIcon width={20} height={20} fill={colors.lightGrey} />
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  searchInput: {
    marginTop: 130,
    marginBottom: 100,
    borderRadius: 30,
    paddingBottom: 15,
    paddingTop: 15,
    paddingLeft: 25,
    paddingRight: 25,
    backgroundColor: colors.white,
  },
  searchText: {
    color: colors.lightGrey,
  },
});
