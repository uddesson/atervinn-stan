//@flow
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { colors, SearchIcon, Paragraph, utilityStyles } from '.';

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
          utilityStyles.boxShadowDark,
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
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 25,
    backgroundColor: colors.white,
  },
  searchText: {
    color: colors.lightGrey,
  },
});
